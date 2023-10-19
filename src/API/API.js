import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDE1YmRkMmYzMzE3ZTU1ZWZhNGI4MDRiMjM5ODIxNCIsInN1YiI6IjY1MmQ2NzAxMDI0ZWM4MDEzYzU4ZjA1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JgGJlVdaUoUJ0oty7awv62yWcrI5JHku-ci7ur8caIk';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const TRENDING = 'trending/all/day';
const DETAILSMOVIE = 'movie/';
const CREDITS = '/credits';
const REVIEWS = '/reviews';
const SEARCH = 'search/movie';

const params = {
  language: 'en-US',
};

export async function getTrendingMovies(signal) {
  const response = await axios.get(TRENDING, { params, signal });
  return response.data.results;
}

export async function getMovieById(id, signal) {
  const response = await axios.get(DETAILSMOVIE + id, { params, signal });
  return response.data;
}

export async function getMovieCast(id, signal) {
  const response = await axios.get(DETAILSMOVIE + id + CREDITS, {
    params,
    signal,
  });
  return response.data.cast;
}

export async function getMovieReviews(id, signal) {
  const response = await axios.get(DETAILSMOVIE + id + REVIEWS, {
    params,
    signal,
  });
  return response.data;
}

export async function getMovieByQuery(query, signal) {
  const params = {
    query: query,
    include_adult: false,
    language: 'en-US',
  };

  const response = await axios.get(SEARCH, { params, signal });
  return response.data.results;
}
