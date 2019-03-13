import React from 'react';
import ReactDOM from 'react-dom';
import FormComponent from 'FormComponent';
import Navigation from './Navigation';
import Login from './Login';

it('renders Navigation component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Login component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders FormComponent component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
