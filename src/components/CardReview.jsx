import React from 'react';
import { Link } from 'react-router-dom';

const CardReview = ({ review }) => {
    const { coverImage, title, name, rating, genres } = review;
    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    className='h-[300px]'
                    src={coverImage}
                    alt="games" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-xl'>Genres:{genres}</p>
                <p className='text-xl'>Rating:{rating}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardReview;