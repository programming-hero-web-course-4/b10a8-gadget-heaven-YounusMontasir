import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const goBack = useNavigate()
    const handleBack = () =>{
        goBack(-1)
    }
    return (
        <div className='flex flex-col justify-center items-center mt-32'>
            <p className='text-6xl font-bold'>404</p>
            <p className='text-4xl py-6'>Page not found</p>
            <button onClick={handleBack} className='btn btn-warning font-bold'>Go back</button>
        </div>
    );
};

export default ErrorPage;