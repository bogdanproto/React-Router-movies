import { ItemCast } from './CastItem.styled';

const CastItem = ({ profile_path, name, character }) => {
  return (
    <ItemCast>
      {profile_path ? (
        <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt="" />
      ) : (
        <h1>?</h1>
      )}

      <p>{name}</p>
      <p>{character}</p>
    </ItemCast>
  );
};

export default CastItem;
