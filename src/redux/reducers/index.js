import { combineReducers } from 'redux';
import navReducer from './navReducer';
import weatherReducer from './weatherReducer';


const reducers = combineReducers({
    nav: navReducer,
    weather: weatherReducer
});

export default reducers;