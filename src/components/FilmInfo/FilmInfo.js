import React from 'react';
import { Link, Route } from 'react-router-dom';
import { getSelectedFilm, searchReview, searchActors } from '../../query';
import { Nav } from '../Nav/Nav';
import { ShowReview } from '../ShowReview';
import { ShowActors } from '../ShowActors';

import {
  overview_style,
  choosed_film_image,
  film_info_style,
  genres_list,
  genre_item,
  button_style,
} from '../style.module.css';

export class FilmInfo extends React.Component {
  state = {
    title: null,
    poster_path: null,
    imdb_id: null,
    genres: [],
    overview: null,
    release_date: null,
    id: null,
    review: [],
    cast: [],
    query: '',
    from: '',
  };

  async componentDidMount() {
    const choosedFilm = await getSelectedFilm(this.props.match.params.filmId);

    await searchReview(
      this.props.match.params.filmId,
    ).then(({ data: { results } }) => this.setState({ review: [...results] }));

    await searchActors(
      this.props.match.params.filmId,
    ).then(({ data: { cast } }) => this.setState({ cast: [...cast] }));

    const {
      data: { title, poster_path, imdb_id, genres, overview, release_date, id },
    } = choosedFilm;

    this.setState({
      title,
      poster_path,
      imdb_id,
      genres,
      overview,
      release_date,
      id,
      from: this.props.location.state.from,
      query: this.props.location.state.query,
    });
  }

  goBack = () => {
    this.props.history.push({
      pathname: this.state.from,
      search: this.state.query ? `?query=${this.state.query}` : '',
    });
  };

  render() {
    const urlImg = 'https://image.tmdb.org/t/p/w400';
    const { title, genres, overview, release_date, poster_path } = this.state;

    return (
      <>
        <Nav />
        <button onClick={this.goBack}>Go back</button>
        <div className={film_info_style}>
          <div className={choosed_film_image}>
            <img
              src={`${urlImg}${poster_path}`}
              alt=""
              width="400px"
              height="600px"
            />
            <Link to={`${this.props.match.url}/cast`}>
              <button className={button_style}>Show actors</button>
            </Link>
            <Link to={`${this.props.match.url}/reviews`}>
              <button className={button_style} type="button">
                Show reviews
              </button>
            </Link>
          </div>
          <div className={overview_style}>
            <h2>{title}</h2>
            <p>Release: {release_date}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres:</h3>
            <ul className={genres_list}>
              {genres.map(({ id, name }) => (
                <li key={id} className={genre_item}>
                  {`#${name.toLowerCase()}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Route
          path={`${this.props.match.url}/cast`}
          render={props => <ShowActors {...props} cast={this.state.cast} />}
        />
        <Route
          path={`${this.props.match.url}/reviews`}
          render={props => <ShowReview {...props} review={this.state.review} />}
        />
      </>
    );
  }
}
