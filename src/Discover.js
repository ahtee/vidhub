import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';

export default class Discover extends Component {

  render() {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-12">
                    <div id="carouselDiscover" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselDiscover" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselDiscover" data-slide-to="1"></li>
                            <li data-target="#carouselDiscover" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <iframe className="d-block carousel-discover-video mx-auto mt-4" width="560" height="315" src="https://www.youtube.com/embed/TRKmvG1EBw8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="title1"></iframe>
                            </div>
                            <div className="carousel-item">
                            <iframe className="d-block carousel-discover-video mx-auto mt-4" width="560" height="315" src="https://www.youtube.com/embed/TwMOiNXtZkg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="title2"></iframe>
                            </div>
                            <div className="carousel-item">
                            <iframe className="d-block carousel-discover-video mx-auto mt-4" width="560" height="315" src="https://www.youtube.com/embed/MXiopMXJADg?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="title3"></iframe>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselDiscover" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselDiscover" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row topic-heat mt-4 ml-2">
                    <h3>Top Clips :scissors:</h3>
                </div>
                <div className="row justify-content-center mb-3 mt-4 mb-5">
                    <div className="col-sm-2">
                        <div className="card">
                            <img src="//placehold.it/210x140" className="tn-trending" alt="clip-description"/>
                            <div className="card-body card-margin">
                                <h5 className="card-title">Card title</h5>
                                <p className="text-muted float-left">ChannelName</p><p className="text-muted float-right"><i className="fas fa-eye"></i> count</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card">
                            <img src="//placehold.it/210x140" className="tn-trending" alt="clip-description"/>
                            <div className="card-body card-margin">
                                <h5 className="card-title">Card title</h5>
                                <p className="text-muted float-left">ChannelName</p><p className="text-muted float-right"><i className="fas fa-eye"></i> count</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card">
                            <img src="//placehold.it/210x140" className="tn-trending" alt="clip-description"/>
                            <div className="card-body card-margin">
                                <h5 className="card-title">Card title</h5>
                                <p className="text-muted float-left">ChannelName</p><p className="text-muted float-right"><i className="fas fa-eye"></i> count</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card">
                            <img src="//placehold.it/210x140" className="tn-trending" alt="clip-description"/>
                            <div className="card-body card-margin">
                                <h5 className="card-title">Card title</h5>
                                <p className="text-muted float-left">ChannelName</p><p className="text-muted float-right"><i className="fas fa-eye"></i> count</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card">
                            <img src="//placehold.it/210x140" className="tn-trending" alt="clip-description"/>
                            <div className="card-body card-margin">
                                <h5 className="card-title">Card title</h5>
                                <p className="text-muted float-left">ChannelName</p><p className="text-muted float-right"><i className="fas fa-eye"></i> count</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}
