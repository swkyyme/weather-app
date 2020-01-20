import React from 'react';
// import Forecast from './Forecast';

class ForecastRow extends React.Component {
// function ForecastRow (props) {
    render() {
        return (
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{this.props.day}</span>
                <span className="weather-forecast__icon">
                    <i className="fa fa-clock-o" />
                    {this.props.time}
                </span>
                <span className="weather-forecast__high">{this.props.high} {this.props.unit}</span>
                <span className="weather-forecast__low">{this.props.low} {this.props.unit}</span>
            </div>
        );
    }
}

export default ForecastRow;