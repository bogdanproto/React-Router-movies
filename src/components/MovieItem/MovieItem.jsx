import { Item, LinkStyled } from './MovieItem.styled';

const MovieItem = ({ id, title, name, poster_path, location }) => {
  return (
    <Item>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
        <p>{title ?? name}</p>
      </LinkStyled>
    </Item>
  );
};

export default MovieItem;
