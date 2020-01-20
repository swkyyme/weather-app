import axios from 'axios';

export const getWeather = (city,cc) => {
    return axios(`https://weather-api-skye.herokuapp.com/api/Weather?city=${city}&cc=${cc}`)
    // .then(res => res.data.data)
};