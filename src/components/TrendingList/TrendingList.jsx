import { Link } from 'react-router-dom';

const TrendingList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>{title ?? name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
