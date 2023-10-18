import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';

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
    <form onSubmit={handleSubmit(submitForm)}>
      <input {...register('query')} autoFocus placeholder="Search movies" />

      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
