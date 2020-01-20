import { getWeather } from '../../utils/axios';

import {format} from 'date-fns';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeather = isLoading => {
    return {
        type: FETCH_WEATHER,
        isLoading
    };
};
export const fetchWeatherSuccess = data => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        data
    };
};
export const fetchWeatherFailure = errorMessage => {
    return {
        type: FETCH_WEATHER_FAILURE,
        errorMessage
    };
};

export const loadWeather = (city,cc) => dispatch => {
    dispatch(fetchWeather())
    getWeather(city,cc)
        .then(response => {
            const cityName = response.data.data.city.name;
            const currentWeather = response.data.data.current;
            const rawforecasts =response.data.data.forecast.slice(0,10);
            const forecasts = rawforecasts.map(rawforecast => {
                const date = new Date(rawforecast.time*1000);
                const day = format(date,'EEE');
                const time = format(date,'HH:mm');
                return {
                    ...rawforecast,
                    day,
                    time
                };
            });

            dispatch(fetchWeatherSuccess({
                cityName,
                currentWeather,
                forecasts
            }));    
        })
        .catch(error => {
            dispatch(fetchWeatherFailure(error.message))
        })
    
};