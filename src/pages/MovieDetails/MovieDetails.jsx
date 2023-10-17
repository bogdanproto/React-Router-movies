import { useState } from 'react';
import { getMovieById } from 'API/API';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDetailsForMivie = async () => {
      try {
        const response = await getMovieById(id);
        setMovieDetails(response);
      } catch (erorr) {
        console.log(erorr);
      }
    };

    getDetailsForMivie();
  }, [id]);

  const { poster_path, original_title, vote_average, overview, genres } =
    movieDetails;

  return (
    <>
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
