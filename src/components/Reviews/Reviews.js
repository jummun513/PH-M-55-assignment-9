import React from 'react';
import useReview from '../../CustomReview/useReview/useReview';
import Comment from '../Comment/Comment';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1 id='review-heading'>What out customer says!</h1>
            <div className='all-review-container'>
                {
                    reviews.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Reviews;