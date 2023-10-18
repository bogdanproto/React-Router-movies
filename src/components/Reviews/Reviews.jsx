import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/API';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { ReviewGallery } from './Review.styled';

const Reviews = () => {
  const [reviewsMovies, setReviewsMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getReviewsForMovie = async () => {
      try {
        setLoad(true);
        setError(false);
        const response = await getMovieReviews(id);
        setReviewsMovies(response.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    getReviewsForMovie();
  }, [id]);

  return (
    <>
      {load && <Loader />}
      {error && <Error textError={'Review has not founded'} />}
      <ReviewGallery>
        {reviewsMovies?.map(({ id, author, content }) => (
          <ReviewItem key={id} author={author} content={content} />
        ))}
        {reviewsMovies.length < 1 && !load && <p>There are no reviews</p>}
      </ReviewGallery>
    </>
  );
};

export default Reviews;
