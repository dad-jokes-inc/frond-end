import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
  );

ReactDOM.render(
<Router>
<Provider store={store}>
<App />
</Provider>
</Router>, document.getElementById('root'));
