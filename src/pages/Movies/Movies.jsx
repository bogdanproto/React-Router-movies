import { getMovieByQuery } from 'API/API';
import Searchbar from 'components/SearchBar/SearchBar';
import { useEffect } from 'react';
import { useState } from 'react';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMovies = async () => {
      try {
        const response = await getMovieByQuery(query);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [query]);

  console.log(movies);
  return (
    <div>
      <Searchbar getQuery={setQuery} />
    </div>
  );
};

export default Movies;
