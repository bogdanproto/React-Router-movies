import { ThreeDots } from 'react-loader-spinner';
import LoaderStyled from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyled>
      <p>Loading</p>
      <ThreeDots
        height="24"
        width="24"
        radius="9"
        color="#404143"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderStyled>
  );
};

export default Loader;
