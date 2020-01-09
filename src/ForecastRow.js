import React from 'react';
import Forecast from './Forecast';

class ForecastRow extends React.Component {
    render() {
        return (
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">Fri</span>
                <span className="weather-forecast__icon">
                    <i className="fa fa-clock-o" />
                    10:00
                </span>
                <span className="weather-forecast__high">19 c</span>
                <span className="weather-forecast__low">8 c</span>
            </div>
        );
    }
}

export default ForecastRow;