import { Construct } from "@aws-cdk/core"
import { IHostedZone, ARecord, RecordTarget } from "@aws-cdk/aws-route53";
import {CloudFrontWebDistribution, CfnCloudFrontOriginAccessIdentity, PriceClass, ViewerProtocolPolicy} from '@aws-cdk/aws-cloudfront';
import { DnsValidatedCertificate } from "@aws-cdk/aws-certificatemanager";
import cdk = require('@aws-cdk/core');
import * as s3 from "@aws-cdk/aws-s3";
import { Bucket, BlockPublicAccess } from "@aws-cdk/aws-s3";
import { PolicyStatement, CanonicalUserPrincipal } from "@aws-cdk/aws-iam";
import {CloudFrontTarget} from "@aws-cdk/aws-route53-targets";
import * as S3deploy from "@aws-cdk/aws-s3-deployment";
import { join } from 'path';

export interface SinglePageAppHostingProps {
  domainName: string;
  bucketName: string;
  certArn?: string;
  hostedZone: IHostedZone;
};

// https://garbe.io/blog/2019/10/01/hey-cdk-how-to-write-less-code/
class SinglePageAppHosting extends Construct {
  public readonly webBucket : Bucket;
  public readonly distribution : CloudFrontWebDistribution;
  
  constructor(scope: Construct, id: string, props: SinglePageAppHostingProps) {
    super(scope, id);

    const oai = new CfnCloudFrontOriginAccessIdentity(this, 'OAI', {
      cloudFrontOriginAccessIdentityConfig: {
        comment: cdk.Aws.STACK_NAME
      }
    });

    // s3 bucket and only allows access from OAI
    this.webBucket = new s3.Bucket(this, 's3bucket', {
      bucketName: props.bucketName,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      websiteIndexDocument: 'index.html',
      // publicReadAccess: true
    });
    this.webBucket.addToResourcePolicy(new PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [this.webBucket.arnForObjects('*')],
      principals: [new CanonicalUserPrincipal(oai.attrS3CanonicalUserId)],
    }));

    new S3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [S3deploy.Source.asset(join(__dirname, '../../../packages/ui/build'))],
      destinationBucket: this.webBucket
      // destinationKeyPrefix: 'web/static' // optional prefix in destination bucket
    });

    // either use provided cert or create one in ACM
    const certArn = props.certArn || new DnsValidatedCertificate(this, 'Certificate', {
      hostedZone: props.hostedZone,
      domainName: props.domainName,
      region: 'us-east-1',
    }).certificateArn;

    // CloudFront distribution with OAI
    this.distribution = new CloudFrontWebDistribution(this, `${props.bucketName}-cfront`, {
      originConfigs: [{
        behaviors: [{ isDefaultBehavior: true }],
        s3OriginSource: {
          s3BucketSource: this.webBucket,
          originAccessIdentityId: oai.ref,
        },
      }],
      viewerCertificate: {
        aliases: [props.bucketName],
        props: {
          acmCertificateArn: certArn,
          sslSupportMethod: 'sni-only'
        }
      },
      // response with index.html on error (SPA)
      errorConfigurations: [{
        errorCode: 403,
        responseCode: 200,
        responsePagePath: '/index.html',
      }, {
        errorCode: 404,
        responseCode: 200,
        responsePagePath: '/index.html',
      }],
      comment: `${props.domainName} Website`,
      priceClass: PriceClass.PRICE_CLASS_ALL,
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS
    });

    // route53 alias record
    new ARecord(this, 'AliasRecord', {
      recordName: props.domainName,
      zone: props.hostedZone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
    });
  }
}

export default SinglePageAppHosting;