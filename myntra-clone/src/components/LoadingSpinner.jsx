import React from 'react'
// im
const LoadingSpinner = () => {

    return (
        <div className='d-flex justify-contanct-center spinner'>
            <div className='spinner-border' role='status' style={{ width: "5rem", height: "5rem" }}>
                <span className='visually-hidden'>Loading.....</span>
            </div>
        </div>
    );
};

export default LoadingSpinner