import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './Navigation';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Navigation />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
