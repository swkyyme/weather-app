import { UPDATE_UNIT, SET_SEARCH_VALUE_CITY, SET_SEARCH_VALUE_CC } from '../actions/navActions';

const initialState = {
    unit: 'C',
    searchValueCity:'',
    searchValueCc:''
};

const navReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_UNIT:
            return {
                ...state,    //immutable so copy
                unit: state.unit ==='C'?'F':'C'
            }
        case SET_SEARCH_VALUE_CITY:
            return {
                ...state,
                searchValueCity: action.value,
            }
        case SET_SEARCH_VALUE_CC:
            return {
                ...state,
                searchValueCc: action.value
            }
        default:
            return state;
    }
}

export default navReducer; //default can only use once