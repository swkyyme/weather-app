import React from 'react';

import { connect } from 'react-redux';

import {updateItemsNumAction} from '../redux/actions/forecastActions'

import ForecastRow from './ForecastRow';

class Forecast extends React.Component {
 
    handleClick=() => {
        this.props.updateItemsNum(5);
    }
    handleClick1=() => {
        this.props.updateItemsNum(10);
    }
    

    render() {
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className={`forecast__switch_0 ${this.props.itemsNum === 5 ? ' switch-active' : ''}`} onClick={this.handleClick}>5 items</button>
                    <button className={`forecast__switch_1 ${this.props.itemsNum === 10 ? ' switch-active' : ''}`} onClick={this.handleClick1}>10 items</button>
                </div>
                { //repeat render component

                    this.props.forecasts.map (forecast => (

                            <ForecastRow
                                key={forecast.day + forecast.time} //add identify dont use index
                                day={forecast.day}
                                time={forecast.time}
                                high={this.props.unit === 'C' ? forecast.maxCelsius : forecast.maxFahrenheit}
                                low={this.props.unit === 'C' ? forecast.minCelsius : forecast.minFahrenheit}
                                unit={this.props.unit}
                            />
                        )).slice(0,this.props.itemsNum)
                }
            </section>
        );
    }
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