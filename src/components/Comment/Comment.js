import React from 'react';
import './Comment.css'

const Comment = (props) => {
    const { picture, ratting, name, review } = props.comment; //destructuring

    return (
        <div className='comment-container'>
            <div className='comment'>
                <img src={picture} alt="" />
                <h2>Ratting : {ratting}</h2>
                <h3>Name : {name}</h3>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Comment;