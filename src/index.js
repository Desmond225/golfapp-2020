import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { createLogger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { searchRounds, requestRounds } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchRounds, requestRounds});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
