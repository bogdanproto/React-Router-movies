import { useState } from 'react';
import { getMovieById } from 'API/API';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';

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

  const { poster_path, original_title, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
      <div>
        <Link to={refLocation.current}>Go back</Link>
      </div>
      {poster_path && (
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
      )}

      <div>
        <h2>{original_title}</h2>
        <p>
          User Score: <span> {vote_average * 10} %</span>
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres?.map(({ id, name }) => (
            <li key={id}> {name}</li>
          ))}
        </ul>
        <p>Additional information</p>
        <Link to={`/movies/${id}/cast`}>Cast</Link>
        <Link to={`/movies/${id}/reviews`}>Reviews</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
