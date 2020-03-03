import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducers from './reducers';

// Saga
import createSagaMiddleware from 'redux-saga';
import { sagas } from './sagas';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import './index.scss';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const rootElement = document.getElementById('root');

let store = createStore(
    reducers,
    compose(applyMiddleware(thunk, sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);


serviceWorker.unregister();
