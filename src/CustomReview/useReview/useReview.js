import React, { useEffect, useState } from 'react';
import url from '../../fakeData/reviews.JSON'


const useReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return [reviews, setReviews];
};

export default useReview;