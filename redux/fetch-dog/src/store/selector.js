export const fetchSlice = (state) => {
    return state;
};

export const isFetchingSelector = (state) => {
    return fetchSlice(state).fetching;
};

export const dogUrlSelctor = (state) => {
    return fetchSlice(state).url;
};

export const errorMessageSelctor = (state) => {
    return fetchSlice(state).error;
};
