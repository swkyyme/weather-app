import React from 'react';
import ForecastRow from './ForecastRow';

class Forecast extends React.Component {

    render() {
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className="forecast__switch_0 switch-active">5 items</button>
                    <button className="forecast__switch_1">10 items</button>
                </div>
                <ForecastRow />
                <ForecastRow />
                <ForecastRow />
            </section>
        );
    }
};

export default Forecast;