import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

export default function Footer() {
  const FOOTER_CONTENT = {};

  return (
    <div className="vidhub-footer">
      <Container>
        <div className="row">
          <div className="col-3">
            <ul>
              <li>About VidHub</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>About VidHub</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>About VidHub</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="col-3">
            <ul>
              <li>About VidHub</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
