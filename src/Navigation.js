import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Button, Form, InputGroup } from 'react-bootstrap';
import logo from './VidHub.JPG';
import user from './default-user.png';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="d-flex flex-justify-between flex-auto">
          <div className="d-flex">
            <button
              className="navbar-toggler mr-2"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="/">
              <img src={logo} alt="VidHub" height="40" />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav d-flex pl-2 pr-2 flex-items-center text-bold list-style-none">
                <li className="nav-item">
                  <Link
                    to="/trending"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Trending <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/discover"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Discover
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link" activeClassName="active">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/games"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Games
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link" activeClassName="active">
                    Live
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control main-search-input mr-sm-2"
              type="search"
              placeholder="Search videos/streams..."
              aria-label="Search"
            />
            <input
              className="btn btn-outline-success my-2 my-sm-0"
              type="hidden"
            />
          </form>
        </div>
        <div className="d-flex justify-content-end ml-auto">
          <label className="switch pr-2 mt-2">
            <i className="fas fa-sun" />
            <input type="checkbox" />
            <span className="slider round" />
          </label>

          <ul className="navbar-nav d-flex pl-2 pr-2 flex-items-center text-bold list-style-none">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={user}
                  className="nav-user-login"
                  alt="Log In"
                  width="30"
                  height="30"
                />
                <span className="badge badge-danger user-badge-danger-notification">
                  9
                </span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right p-3"
                aria-labelledby="navbarDropdown"
              >
                <Form>
                  <Form.Group>
                    <Form.Label htmlFor="user-email">
                      Username or email:
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="user-email"
                      id="user-email"
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="user-password">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="user-password"
                      id="user-password"
                      required
                    />
                  </Form.Group>
                  <div className="remember-me checkbox">
                    <Form.Group className="ml-4">
                      <Form.Label htmlFor="remember">
                        <InputGroup.Checkbox
                          type="checkbox"
                          name="remember"
                          id="remember"
                          value="0"
                        />
                        <span>Remember me</span>
                      </Form.Label>
                    </Form.Group>
                  </div>
                  <Button type="submit" className="btn btn-success" block>
                    Sign In
                  </Button>
                  <div className="forgot-password">
                    <a href="/forgot">Forgot password?</a>
                  </div>
                  <div className="register">
                    <a href="/register">Sign Up</a>
                  </div>
                </Form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
