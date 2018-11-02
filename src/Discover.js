import React, { Component } from 'react';
import './App.css';

export default class PageComponent extends Component {
//   constructor(props) {

//   }
  render() {
    return (

        <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h1 className="display-4">Discover Video Content slider here</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/discover" role="button">Learn more</a>
            </p>
            </div>
        </div>

    );
  }
}
