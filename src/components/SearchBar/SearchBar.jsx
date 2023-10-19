import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FormStyled } from './SearchBar.styled';

const Searchbar = ({ getQuery }) => {
  const { register, handleSubmit } = useForm();
  const [prevQuery, setPrevQuery] = useState('');

  const submitForm = ({ query }) => {
    const normalaizeQuery = query.toLowerCase();
    if (!normalaizeQuery) {
      toast.info('Please text your query');
      return;
    }

    if (prevQuery === normalaizeQuery) {
      toast.info('This query has done');
      return;
    }

    setPrevQuery(normalaizeQuery);

    getQuery({ query: normalaizeQuery });
  };

  return (
    <FormStyled onSubmit={handleSubmit(submitForm)}>
      <input {...register('query')} autoFocus placeholder="Search movies" />

      <button type="submit">Search</button>
    </FormStyled>
  );
};

export default Searchbar;
