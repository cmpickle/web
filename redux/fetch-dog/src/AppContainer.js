import { App } from './App';
import { fetchDogAction, fetchDogCompleteAction, fetchDogErrorAction, fetchDogSuccessAction, setStateAction } from './store/actions';
import { isFetchingSelector, errorMessageSelctor, dogUrlSelctor, fetchSlice } from './store/selector';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        url: dogUrlSelctor(state),
        fetching: isFetchingSelector(state),
        error: errorMessageSelctor(state),
        state: fetchSlice(state)
    };
};

const mapDispatchToProps = {
    fetchDogAction,
    fetchDogCompleteAction,
    fetchDogErrorAction,
    fetchDogSuccessAction,
    setState: setStateAction
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);