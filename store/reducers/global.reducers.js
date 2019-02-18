import * as actionTypes from '../actionTypes';

const initialState = {
    showLoader: false,
    error: null
};

const updateLoaderAndError = (state, action) => {
    return {...state, showLoader: action.showLoader, error: error};
};

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_LOADER_AND_ERROR:
            return updateLoaderAndError(state, action);
        default:
            return state;
    }
    ;
};