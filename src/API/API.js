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

export async function getTrendingMovies() {
  const response = await axios.get(TRENDING, { params });
  return response.data.results;
}

export async function getMovieById(id) {
  const response = await axios.get(DETAILSMOVIE + id, { params });
  return response.data;
}

export async function getMovieCast(id) {
  const response = await axios.get(DETAILSMOVIE + id + CREDITS, { params });
  return response.data.cast;
}

export async function getMovieReviews(id) {
  const response = await axios.get(DETAILSMOVIE + id + REVIEWS, { params });
  return response.data;
}

export async function getMovieByQuery(query) {
  const params = {
    query: 'aliens',
    include_adult: false,
    language: 'en-US',
  };

  const response = await axios.get(SEARCH, { params });
  return response.data;
}
