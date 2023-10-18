import { useState } from 'react';
import { getMovieById } from 'API/API';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import {
  AddInfo,
  AddStyledLink,
  LinkBack,
  MovieCard,
  MovieCardInfo,
} from './MovieDetails.styled';
import { useMemo } from 'react';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const MovieDetails = () => {
  const location = useLocation();
  const refLocation = useRef(location.state?.from);
  const [movieDetails, setMovieDetails] = useState({});
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getDetailsForMivie = async () => {
      try {
        setLoad(true);
        setError(false);
        const response = await getMovieById(id);
        setMovieDetails(response);
      } catch (erorr) {
        setError(true);
      } finally {
        setLoad(false);
      }
    };

    getDetailsForMivie();
  }, [id]);

  const isMovieDetailsEmpty = useMemo(
    () => Boolean(Object.keys(movieDetails).length),
    [movieDetails]
  );

  const { poster_path, original_title, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <LinkBack to={refLocation.current}>Go back</LinkBack>
      {load && <Loader />}
      {error && (
        <Error
          textError={'Movie has not founded, choose please another movies'}
        />
      )}

      {isMovieDetailsEmpty && (
        <MovieCard>
          <div>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt=""
              />
            )}

            <MovieCardInfo>
              <h2>{original_title}</h2>
              <p>
                User Score: <span> {vote_average?.toFixed(2)} %</span>
              </p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres?.map(({ id, name }) => (
                  <li key={id}> {name}</li>
                ))}
              </ul>
            </MovieCardInfo>
          </div>
          <AddInfo>
            <p>Additional information</p>
            <div>
              <AddStyledLink to={`/movies/${id}/cast`}>Cast</AddStyledLink>
              <AddStyledLink to={`/movies/${id}/reviews`}>
                Reviews
              </AddStyledLink>
            </div>
          </AddInfo>
        </MovieCard>
      )}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
