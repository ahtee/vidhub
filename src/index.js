import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import App from './App';
import Navigation from './Navigation';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<Navigation />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
