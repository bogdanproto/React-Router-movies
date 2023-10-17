const CastItem = ({ profile_path, name, character }) => {
  return (
    <>
      {profile_path && (
        <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt="" />
      )}

      <h3>{name}</h3>
      <h3>{character}</h3>
    </>
  );
};

export default CastItem;
