import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Searchbar = ({ getQuery }) => {
  const { register, handleSubmit } = useForm();
  const [prevQuery, setPrevQuery] = useState('');

  const submitForm = ({ query }) => {
    if (!query) {
      toast.info('Please text your query');
      return;
    }

    if (prevQuery === query) {
      toast.info('This query has done');
      return;
    }

    setPrevQuery(query);

    getQuery(query.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <button type="submit"></button>

      <input {...register('query')} autoFocus placeholder="Search movies" />
    </form>
  );
};

export default Searchbar;
