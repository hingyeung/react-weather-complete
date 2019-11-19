#!/usr/bin/env bash
set -e

pushd .

mkdir -p dist
pwd
cp ./package.json dist/
cp ./package-lock.json dist/
cd dist/
npm install --production

popd