import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'API/API';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { ReviewNotFound } from './Review.styled';

const Reviews = () => {
  const [reviewsMovies, setReviewsMovies] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getReviewsForMovie = async () => {
      try {
        setLoad(true);
        setError(false);
        const response = await getMovieReviews(id, controller.signal);
        setReviewsMovies(response.results);
        setLoad(false);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    };
    getReviewsForMovie();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {load && <Loader />}
      {error && <Error textError={'Review has not founded'} />}
      <ul>
        {reviewsMovies &&
          Boolean(reviewsMovies.length) &&
          reviewsMovies?.map(({ id, author, content }) => (
            <ReviewItem key={id} author={author} content={content} />
          ))}
        {reviewsMovies && !reviewsMovies.length && (
          <ReviewNotFound>There are no reviews</ReviewNotFound>
        )}
      </ul>
    </>
  );
};

export default Reviews;
