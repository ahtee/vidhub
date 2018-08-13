import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Login from './Login';
import App from './App';
import Navigation from './Navigation';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<Navigation />, document.getElementById('nav'));
// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

ReactDOM.render(
<Router>
  <Route path="/" component={App}>
    <Route path="Navigation" component={Navigation} />
    <Route path="App" component={App} />
  </Route>
  <Route path="/Login" component={Login} />
</Router>,
document.getElementById('route')
);
