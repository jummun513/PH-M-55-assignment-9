import React from 'react';
import useReview from '../../CustomReview/useReview/useReview';
import Comment from '../Comment/Comment';
import './ThreeCart.css'

const ThreeCart = () => {
    const [reviews, setReviews] = useReview();
    const sliceArray = reviews.slice(0, 3);
    return (
        <div>
            <h1>Customer's Reviews ({sliceArray.length})</h1>
            <div className='three-container'>
                {
                    sliceArray.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default ThreeCart;