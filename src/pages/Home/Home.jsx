import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API/API';
import TrendingList from 'components/TrendingList/TrendingList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingList() {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response);
      } catch (error) {
        console.log(error);
      }
    }

    getTrendingList();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <TrendingList trendingMovies={trendingMovies} />
    </div>
  );
};

export default Home;
