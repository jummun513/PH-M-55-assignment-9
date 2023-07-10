import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/home`);
    }
    return (
        <div className='NotFound-container'>
            <h1>404 Page Not Found.</h1>
            <p>Looks like you've followed a link or entered an URL that doesn't exit on this site.</p>
            <button onClick={goBack}>Back to our site</button>
        </div>
    );
};

export default NotFound;