import React from 'react';

import { connect } from 'react-redux';

import { updateItemsNumAction } from '../redux/actions/forecastActions'

import ForecastRow from './ForecastRow';

// class Forecast extends React.Component {
function Forecast(props) {

    return (
        <section className="weather-forecast">
            <div className="forecast__switch">
                <button className={`forecast__switch_0 ${props.itemsNum === 5 ? ' switch-active' : ''}`} onClick={() => {props.updateItemsNum(5)}}>5 items</button>
                <button className={`forecast__switch_1 ${props.itemsNum === 10 ? ' switch-active' : ''}`} onClick={() => {props.updateItemsNum(10)}}>10 items</button>
            </div>
            { //repeat render component

                props.forecasts.map (forecast => (

                        <ForecastRow
                            key={forecast.day + forecast.time} //add identify dont use index
                            day={forecast.day}
                            time={forecast.time}
                            high={props.unit === 'C' ? forecast.maxCelsius : forecast.maxFahrenheit}
                            low={props.unit === 'C' ? forecast.minCelsius : forecast.minFahrenheit}
                            unit={props.unit}
                        />
                    )).slice(0,props.itemsNum)
            }
        </section>
    );

};


const mapStateToProps = state => {
    return {
        unit: state.nav.unit,
        itemsNum: state.weather.itemsNum,
        forecasts: state.weather.forecasts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateItemsNum: (number) => dispatch(updateItemsNumAction(number)),
        };
    };

export default connect(mapStateToProps,mapDispatchToProps) (Forecast);

// export default Forecast;