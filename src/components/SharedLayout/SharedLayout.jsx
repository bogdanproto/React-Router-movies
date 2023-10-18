import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default SharedLayout;
