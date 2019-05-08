import * as actions from './reducer';

export const fetchDogAction = () => ({
    type: actions.FETCH_DOG
});

export const fetchDogSuccessAction = (url) => ({
    type: actions.FETCH_DOG_SUCCESS,
    url
});

export const fetchDogErrorAction = (error) => ({
    type: actions.FETCH_DOG_ERROR,
    error
});

export const fetchDogCompleteAction = () => ({
    type: actions.FETCH_DOG_COMPLETE
});

export const setStateAction = (payload) => ({
    type: actions.SET_STATE,
    payload
});
