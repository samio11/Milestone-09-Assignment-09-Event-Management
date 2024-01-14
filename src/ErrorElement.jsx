import React from 'react';
import error1 from './ErrorAnimation.json'
import Lottie from 'lottie-react';

const ErrorElement = () => {
    return (
        <div>
            <Lottie className='w-[100vw] h-[100vh]' animationData={error1}></Lottie>
        </div>
    );
};

export default ErrorElement;