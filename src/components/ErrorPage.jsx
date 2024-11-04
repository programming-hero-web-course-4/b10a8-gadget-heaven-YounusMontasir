import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const goBack = useNavigate()
    const handleBack = () =>{
        goBack(-1)
    }
    return (
        <div>
            <p>404</p>
            <p>Page not found</p>
            <button onClick={handleBack} className='btn btn-warning'>Go back</button>
        </div>
    );
};

export default ErrorPage;