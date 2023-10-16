import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/favorites" element={<div>Favotites</div>} />
      </Routes>
    </div>
  );
};
