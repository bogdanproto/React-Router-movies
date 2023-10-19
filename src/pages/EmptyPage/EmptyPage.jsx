import { Link } from 'react-router-dom';
import { EmtyPageStyled } from './EmptyPage.styled';

const EmptyPage = () => {
  return (
    <EmtyPageStyled>
      <p>Page is not existed</p> <Link to={'/'}>Please redirect home</Link>
    </EmtyPageStyled>
  );
};

export default EmptyPage;
