import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../actions/weatherActions';
import { UPDATE_ITEMSNUM } from '../actions/forecastActions';

const initialState = {
    errorMessage: '',
    isLoading: false,
    cityName: '',
    currentWeather: {},
    forecasts: [],
    itemsNum: 5,
};

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_ITEMSNUM:
            let itemsNum = state.itemsNum;
            itemsNum = action.number;
            return {
                ...state,
                itemsNum
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                cityName: action.data.cityName,
                currentWeather: action.data.currentWeather,
                forecasts: action.data.forecasts,
                isLoading: false
            }
        case FETCH_WEATHER:
            return {
                ...state,
                isLoading: true,
                errorMessage: '',
            }
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isLoading:false
            }
        default:
            return state;
    }
}

export default weatherReducer;