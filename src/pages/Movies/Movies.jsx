import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from 'API/API';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/SearchBar/SearchBar';
import { MoviesTextNotFound } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const queryParams = searchParams.get('query');

    if (!queryParams) {
      return;
    }

    const controller = new AbortController();
    const getMovies = async () => {
      try {
        setLoad(true);
        setError(false);
        const response = await getMovieByQuery(queryParams, controller.signal);
        setMovies(response);
        setLoad(false);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    };

    getMovies();

    return () => {
      controller.abort();
    };
  }, [searchParams]);

  return (
    <div>
      <Searchbar getQuery={setSearchParams} />
      {load && <Loader />}
      {error && <Error textError={'Someting went wrong, reload page please'} />}
      {movies && Boolean(movies.length) && movies.length && (
        <MoviesList moviesList={movies} location={location} />
      )}
      {movies && !movies.length && (
        <MoviesTextNotFound>
          Result has not founded, try other qeury
        </MoviesTextNotFound>
      )}
    </div>
  );
};

export default Movies;
