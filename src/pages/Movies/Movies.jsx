import { getMovieByQuery } from 'API/API';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const queryParams = searchParams.get('query');

    if (!queryParams) {
      return;
    }

    const getMovies = async () => {
      try {
        const response = await getMovieByQuery(queryParams);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [searchParams]);

  return (
    <div>
      <Searchbar getQuery={setSearchParams} />
      {movies.length ? (
        <MoviesList moviesList={movies} location={location} />
      ) : (
        false
      )}
    </div>
  );
};

export default Movies;
