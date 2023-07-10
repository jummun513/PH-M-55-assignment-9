import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import url from '../../images/bicycle.png';
import ThreeCart from '../ThreeCart/ThreeCart';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const goReview = () => {
        navigate(`/reviews`);
    }
    return (
        <div>
            <div className='home-container'>
                <div className="text">
                    <h1>My following bicycle.</h1>
                    <h1 style={{ color: 'blue' }}>My best bicycle.</h1>
                    <p>Your trusted DURANTA bikes are being manufactured by Rangpur Metal Industries Limited since 2013. It is a Sister concern of RFL Group.</p>
                    <button>View More</button>
                </div>
                <div className='img'>
                    <img src={url} alt="banner.png" />
                </div>
            </div>


            <div className='review'>
                <div className='review-container'>
                    <ThreeCart></ThreeCart>
                </div>
                <button id='see-all' onClick={goReview}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;