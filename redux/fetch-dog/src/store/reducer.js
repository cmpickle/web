export const FETCH_DOG = 'FETCH_DOG';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const FETCH_DOG_COMPLETE = 'FETCH_DOG_COMPLETE';
export const SET_STATE = 'SET_STATE';

const initialState = {
    fetching: false,
    url: undefined,
    error: undefined
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DOG:
            return {
                ...state,
                fetching: true,
                error: undefined
            };
        case FETCH_DOG_SUCCESS:
            return {
                ...state,
                url: action.payload.url
            };
        case FETCH_DOG_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload.error
            };
        case FETCH_DOG_COMPLETE:
            return {
                ...state,
                fetching: false
            };
        case SET_STATE:
            return {
                ...state,
                fetching: action.payload.fetching,
                url: action.payload.url,
                error: action.payload.error,
            };
        default:
        return state;
    }
}
