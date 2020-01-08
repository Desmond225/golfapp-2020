import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROUNDS_SUCCESS,
    REQUEST_ROUNDS_FAILED,
    REQUEST_ROUNDS_PENDING,
} from './constants';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRounds = () => (dispatch) => {
    dispatch({type: REQUEST_ROUNDS_PENDING});
    fetch('http://localhost:3005/rounds')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ROUNDS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROUNDS_FAILED, payload: error}))
}