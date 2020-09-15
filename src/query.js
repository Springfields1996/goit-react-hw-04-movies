import axios from 'axios';

const apiKey = 'bcd2ec90817f156543a3ef7a4a2566ee';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getPopularFilms = async () => {
  try {
    let popularFilms;
    await axios
      .get(`/trending/all/day?api_key=${apiKey}`)
      .then(film => (popularFilms = film.data.results));
    return popularFilms;
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedFilm = id => {
  try {
    return axios.get(`/movie/${id}?api_key=${apiKey}&language=en-US`);
  } catch (err) {
    console.log(err);
  }
};

export const searchFilms = word => {
  try {
    return axios.get(
      `/search/movie?api_key=${apiKey}&language=en-US&query=${word}&page=1`,
    );
  } catch (error) {
    console.log(error);
  }
};

export const searchReview = id => {
  try {
    return axios.get(`/movie/${id}/reviews?api_key=${apiKey}&language=en-US`);
  } catch (error) {
    console.log(error);
  }
};

export const searchActors = id => {
  try {
    return axios.get(`/movie/${id}/credits?api_key=${apiKey}`);
  } catch (error) {
    console.log(error);
  }
};
