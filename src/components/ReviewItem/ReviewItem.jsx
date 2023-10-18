import { ReviewCard } from './ReviewItem.styled';

const ReviewItem = ({ author, content }) => {
  return (
    <ReviewCard>
      <h3>{author}</h3>
      <p>{content}</p>
    </ReviewCard>
  );
};

export default ReviewItem;
