import * as React from 'react';
import {Component} from 'react';

export interface Props {
    temperature: number | undefined;
    loadWeatherData: () => void;
}

class ReactWeather extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadWeatherData();
    }

    render() {
        console.log(this.props.temperature);
        const tempStr = this.props.temperature ? this.props.temperature : '';
        return (
            <div id="main">React Weather: {tempStr}</div>
        )
    }
}

export default ReactWeather