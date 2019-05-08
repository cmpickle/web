import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { AppContainer } from './AppContainer';
import { rootReducer } from './store/reducer';

const store = createStore(
    rootReducer
);

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
