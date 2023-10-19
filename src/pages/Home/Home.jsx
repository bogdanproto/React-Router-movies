import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'API/API';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { HomePage } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getTrendingList() {
      try {
        setLoad(true);
        setError(false);
        const response = await getTrendingMovies(controller.signal);
        setTrendingMovies(response);
        setLoad(false);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }

    getTrendingList();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <HomePage>
      <h2>Trending today</h2>
      {load && <Loader />}
      {error && <Error textError={'Someting went wrong, reload page please'} />}
      {Boolean(trendingMovies.length) && (
        <MoviesList moviesList={trendingMovies} location={location} />
      )}
    </HomePage>
  );
};

export default Home;
