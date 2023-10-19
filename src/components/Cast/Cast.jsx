import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'API/API';
import CastItem from 'components/CastItem/CastItem';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { CastInfo, GalleryCast } from './Cast.styled';

const Cast = () => {
  const [castMovies, setCastMovies] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getCastForMovie = async () => {
      try {
        setLoad(true);
        setError(false);
        const response = await getMovieCast(id, controller.signal);
        setCastMovies(response);
        setLoad(false);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    };
    getCastForMovie();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {load && <Loader />}
      {error && <Error textError={'Someting went wrong, try to reload'} />}
      {castMovies && Boolean(castMovies.length) && (
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
      {castMovies && !castMovies.length && (
        <CastInfo>There are no information about cast</CastInfo>
      )}
    </>
  );
};

export default Cast;
