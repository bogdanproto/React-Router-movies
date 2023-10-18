import MovieItem from 'components/MovieItem/MovieItem';
import { GalleryStyled } from './MoviesList.styled';

const MoviesList = ({ moviesList, location }) => {
  return (
    <GalleryStyled>
      {moviesList.map(({ id, title, name, poster_path }) => (
        <MovieItem
          key={id}
          id={id}
          title={title}
          name={name}
          poster_path={poster_path}
          location={location}
        />
      ))}
    </GalleryStyled>
  );
};

export default MoviesList;
