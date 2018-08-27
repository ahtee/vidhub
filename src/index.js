import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageComponent from './PageComponent';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<PageComponent />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
