import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

const store = createStore(/*A reducer will go in here*/)


ReactDOM.render(
<Router>
<Provider store={store}>
<App />
</Provider>
</Router>, document.getElementById('root'));
