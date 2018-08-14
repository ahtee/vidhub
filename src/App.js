import React, { Component } from 'react';
import './App.css';
import FormComponent from './FormComponent';


export default class App extends Component {

  render() {

    return (
      <div className="container mt-4">
        <FormComponent />
      </div>
    );
  }
}
