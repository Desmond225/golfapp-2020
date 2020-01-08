import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROUNDS_SUCCESS,
    REQUEST_ROUNDS_FAILED,
    REQUEST_ROUNDS_PENDING,
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchRounds = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialStateRounds = {
    isPending: false,
    rounds: [],
    error: ''
}

export const requestRounds = (state=initialStateRounds, action={}) => {
    switch(action.type) {
        case REQUEST_ROUNDS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROUNDS_SUCCESS:
            return Object.assign({}, state, {rounds: action.payload, isPending: false}) 
        case REQUEST_ROUNDS_FAILED: 
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
};