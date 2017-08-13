import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import Navi from './components/navigation';
import NaviLogo from './components/navigationLogo';
import Home from './components/home';
import SignUpPage from './components/signup/signuppage';



const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)
// 
// create default empty store to store the data :)


ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
    <div>
      <Switch>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));