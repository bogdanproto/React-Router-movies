import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API/API';
import MoviesList from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { HomePage } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingList() {
      try {
        setLoad(true);
        setError(false);
        const response = await getTrendingMovies();
        setTrendingMovies(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    }

    getTrendingList();
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
