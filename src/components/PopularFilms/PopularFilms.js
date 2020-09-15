import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getPopularFilms } from '../../query';
import { trending_films, films_list, title_film } from '../style.module.css';

function PopularFilms({ films, location, query }) {
  const urlImg = 'https://image.tmdb.org/t/p/w300/';
  return (
    <ul className={films_list}>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link
              to={{
                pathname: `movies/${film.id}`,
                state: { from: location.pathname, query },
              }}
              className={title_film}
            >
              <div className={trending_films}>
                <img
                  src={`${urlImg}${film.poster_path}`}
                  alt=""
                  width="300px"
                  height="450px"
                />
                <span className={title_film}>{film.title || film.name}</span>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default withRouter(PopularFilms);

// export class PopularFilms extends React.Component {
//   state = {
//     films: [],
//   };

//   componentDidMount() {
//     console.log(this.props.films);
//     this.props.films
//       ? this.setState({ films: [...this.props.films] })
//       : getPopularFilms().then(film => this.setState({ films: [...film] }));
//   }

//   componentDidUpdate(prevState) {
//     console.log(this.props.films);
//     this.props.films
//       ? this.setState({ films: [...this.props.films] })
//       : getPopularFilms().then(film => this.setState({ films: [...film] }));
//   }

//   render() {
//     const urlImg = 'https://image.tmdb.org/t/p/w300/';
//     return (
//       <ul className={films_list}>
//         {films &&
//           films.map(film => (
//             <li key={film.id}>
//               <Link to={`movies/${film.id}`} className={title_film}>
//                 <div className={trending_films}>
//                   <img
//                     src={`${urlImg}${film.poster_path}`}
//                     alt=""
//                     width="300px"
//                     height="450px"
//                   />
//                   <span className={title_film}>{film.title || film.name}</span>
//                 </div>
//               </Link>
//             </li>
//           ))}
//       </ul>
//     );
//   }
// }
