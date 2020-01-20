export const UPDATE_UNIT = 'UPDATE_UNIT';   //TOGGLE_UNIT
export const SET_SEARCH_VALUE_CITY = 'SET_SEARCH_VALUE_CITY';
export const SET_SEARCH_VALUE_CC = 'SET_SEARCH_VALUE_CC';

export const updateUnitAction = () => {
    return {
        type: UPDATE_UNIT
    };
};

export const setSearchValueCity = value => {
    return {
        type: SET_SEARCH_VALUE_CITY,
        value
    };
};

export const setSearchValueCc = value => {
    return {
        type: SET_SEARCH_VALUE_CC,
        value
    };
};
