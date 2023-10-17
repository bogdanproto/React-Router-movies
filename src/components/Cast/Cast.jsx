import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'API/API';
import CastItem from 'components/CastItem/CastItem';

const Cast = () => {
  const [castMovies, setCastMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCastForMovie = async () => {
      try {
        const response = await getMovieCast(id);
        setCastMovies(response);
      } catch (error) {
        console.log(error);
      }
    };
    getCastForMovie();
  }, [id]);

  return (
    <ul>
      {castMovies?.map(({ id, profile_path, name, character }) => (
        <CastItem
          key={id}
          profile_path={profile_path}
          name={name}
          character={character}
        />
      ))}
    </ul>
  );
};

export default Cast;
