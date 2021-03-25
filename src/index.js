import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import "./css/index.css"

import { Provider } from 'react-redux'
import store from './store'
import ReactRouter from './router/router';
ReactDOM.render(
    <Provider store={store}>
  
    <ReactRouter />
  </Provider>
    
    ,
    document.getElementById('root'));