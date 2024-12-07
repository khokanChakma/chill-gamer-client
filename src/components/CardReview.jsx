import React from 'react';
import { Link } from 'react-router-dom';

const CardReview = ({ review }) => {
    const { coverImage, title, _id, rating, genres, year } = review;
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
                <div className='flex'>
                    <p className='text-xl'>Rating:{rating}</p>
                   
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <p className='text-xl'>Publishing Year:{year}</p>
                <div className="card-actions">
                    <Link to={`/details/${_id}`} className="btn btn-primary">Explore Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CardReview;