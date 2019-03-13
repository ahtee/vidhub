import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    games: [
      {
        poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
        gameName: 'Fortnite',
        viewers: 0
      }
    ]
  };

  render() {
    const listGames = this.props.games.map(game => (
      <div className="card">
        <img
          className="card-img-top vh-game-poster-resize"
          src={game.poster}
          alt={game.gameName}
        />
        <div className="card-body">
          <b>{game.gameName}</b>
          <p>
            <i className="fas fa-eye" /> {game.viewers} viewers
          </p>
        </div>
      </div>
    ));

    return (
      <div>
        <Container>
          <div className="p-2 bd-highlight">{listGames}</div>
        </Container>
      </div>
    );
  }
}

Games.defaultProps = {
  games: [
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 67
    },
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 0
    },
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 34
    },
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 67
    },
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 0
    },
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 12
    },
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 3
    },
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 9
    },
    {
      poster: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-285x380.jpg',
      gameName: 'Fortnite',
      viewers: 12
    }
  ]
};
