import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Login from './Login';
import Discover from './Discover';
import Trending from './Trending';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/discover" component={Discover} />
            <Route path="/trending" component={Trending} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
