import * as actionTypes from '../actionTypes';

export const updateLoaderAndError = (showLoader = true, error = null) => {
    return {
        type: actionTypes.UPDATE_LOADER_AND_ERROR,
        showLoader: showLoader,
        error: error
    };
};