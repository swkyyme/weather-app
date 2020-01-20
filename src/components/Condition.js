import React from 'react';
import umberella from '../icon/icon-umberella.png';
import wind from '../icon/icon-wind.png';
import compass from '../icon/icon-compass.png';

import { connect } from 'react-redux';

const Condition = (props) => {

  const tempHigh = props.unit === 'C' ? props.currentWeather.maxCelsius : props.currentWeather.maxFahrenheit;

    return (
        <section className="weather-condition">
          <div className="weather-condition__location">{props.cityName}</div>
          <div style={{textAlign: 'center', fontSize: 14 + 'px'}}>{props.currentWeather.weather}</div>
          <div className="weather-condition__temp">{tempHigh} {props.unit}</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umberella} alt="umberella" />
              <span className="citem">{props.currentWeather.humidity}%</span>
            </div>
            <div>
              <img src={wind} alt="wind" /> <span className="citem">{props.currentWeather.windSpeed} km/h</span>
            </div>
            <div>
              <img src={compass} alt="compass" /> <span className="citem">{props.currentWeather.windDirection}</span>
            </div>
          </div>
        </section>
    );
};
const mapStateToProps = state => {
  return {
      unit: state.nav.unit,
      cityName: state.weather.cityName,
      currentWeather: state.weather.currentWeather
  };
};

export default connect(mapStateToProps) (Condition);
