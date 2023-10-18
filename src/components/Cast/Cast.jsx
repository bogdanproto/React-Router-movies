import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'API/API';
import CastItem from 'components/CastItem/CastItem';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { CastInfo, GalleryCast } from './Cast.styled';

const Cast = () => {
  const [castMovies, setCastMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getCastForMovie = async () => {
      try {
        setLoad(true);
        setError(false);
        const response = await getMovieCast(id);
        setCastMovies(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    getCastForMovie();
  }, [id]);

  return (
    <>
      {load && <Loader />}
      {error && (
        <Error
          textError={'Movie has not founded, choose please another movies'}
        />
      )}
      {Boolean(castMovies.length) && (
        <GalleryCast>
          {castMovies?.map(({ id, profile_path, name, character }) => (
            <CastItem
              key={id}
              profile_path={profile_path}
              name={name}
              character={character}
            />
          ))}
        </GalleryCast>
      )}
      {castMovies.length < 1 && !load && (
        <CastInfo>There are no information about cast</CastInfo>
      )}
    </>
  );
};

export default Cast;
