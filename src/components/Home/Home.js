import React, { Component } from 'react';
import { Nav } from '../Nav/Nav';
import PopularFilms from '../PopularFilms/PopularFilms';

import { getPopularFilms } from '../../query';

export default class Home extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    getPopularFilms().then(film => this.setState({ films: [...film] }));
  }

  render() {
    return (
      <>
        <Nav />
        <h2>New films</h2>
        <PopularFilms films={this.state.films} />
      </>
    );
  }
}
