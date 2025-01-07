import React from 'react';
import { Link } from 'react-router-dom';

const CardReview = ({ review }) => {
    const { coverImage, title, _id, rating, genres, year } = review;
    return (
        <div className="card card-compact bg-base-100 w-full p-4 border shadow-xl">
            <figure>
                <img
                    className='h-[200px]'
                    src={coverImage}
                    alt="games" />
            </figure>
            <div className="flex flex-col justify-center items-center md:items-start space-y-1">
                <h2 className="card-title text-xl">{title}</h2>
                <p className=''>{genres}</p>
                <div className='flex'>
                    <p className=''>Rating:{rating}</p>
                   
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
                <p className=''>Publishing Year:{year}</p>
                <div className="card-actions">
                    <Link to={`/details/${_id}`} className="btn bg-[#018992] text-white">See More</Link>
                </div>
            </div>
        </div>
    );
};

export default CardReview;