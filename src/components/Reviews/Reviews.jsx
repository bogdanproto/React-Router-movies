import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'API/API';
import ReviewItem from 'components/ReviewItem/ReviewItem';

const Reviews = () => {
  const [reviewsMovies, setReviewsMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getReviewsForMovie = async () => {
      try {
        const response = await getMovieReviews(id);
        setReviewsMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviewsForMovie();
  }, [id]);

  return (
    <ul>
      {reviewsMovies?.map(({ id, author, content }) => (
        <ReviewItem key={id} author={author} content={content} />
      ))}
    </ul>
  );
};

export default Reviews;
