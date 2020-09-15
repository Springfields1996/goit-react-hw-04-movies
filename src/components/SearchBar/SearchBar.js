import React from 'react';
import queryString from 'query-string';
import { searchFilms } from '../../query';
import PopularFilms from '../PopularFilms/PopularFilms';

export class SearchBar extends React.Component {
  state = {
    query: '',
    films: [],
  };

  componentDidMount() {
    const search = queryString.parse(this.props.location.search);
    search.query &&
      searchFilms(search.query).then(movies =>
        this.setState({
          films: [...movies.data.results],
          query: search.query,
        }),
      );
  }

  // componentDidUpdate(prevProps) {
  // const prevQuery = queryString.parse(prevProps.location.search);
  // const queryNow = queryString.parse(this.props.location.search);
  // prevQuery !== queryNow &&
  // searchFilms(this.state.query).then(movies =>
  //   this.setState({
  //     films: [...movies.data.results],
  //     query: this.state.query,
  //   }),
  // );
  // }

  labelChange = event => {
    this.setState({ query: event.target.value });
  };

  onSubmit = async event => {
    event.preventDefault();
    await searchFilms(this.state.query).then(movies =>
      this.setState({
        films: [...movies.data.results],
        query: this.state.query,
      }),
    );
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?query=${this.state.query}`,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Search film"
            value={this.state.query}
            onChange={this.labelChange}
          />
          <button type="submit">Search</button>
        </form>
        <PopularFilms films={this.state.films} query={this.state.query} />
      </>
    );
  }
}
