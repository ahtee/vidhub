import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Login from './Login';
import FormComponent from './FormComponent';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/gen" component={FormComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
