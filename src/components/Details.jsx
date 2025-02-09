import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";

const Details = () => {
    const userData = useLoaderData()
    const {user} = useContext(AuthContext);
    const { coverImage, title, review, name, email, rating, genres, _id } = userData;
    const watchListData = {
        coverImage: coverImage,
        title: title,
        review: review,
        rating: rating,
        genres: genres,
        name: name,
        email: email,
    }

    const handleWatchList = () => {
        fetch('https://chill-gamer-server-mocha.vercel.app/watchList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(watchListData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "watchList successfully added",
                    });
                }
            })

    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-4">Review Details</h2>
            <div className="flex flex-col lg:flex-row gap-6 p-6 bg-base-200 rounded-xl shadow-xl w-10/12 mx-auto">
                <img
                    className="w-96 rounded-xl"
                    src={coverImage} />
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h4><span className="text-xl font-semibold">Review Description: </span> {review}</h4>
                    <h4><span className="text-xl font-semibold">Genres: </span> {genres}</h4>
                    <h4><span className="text-xl font-semibold">Reviewer name : </span> {name}</h4>
                    <h4><span className="text-xl font-semibold">Reviewer Email: </span> {email}</h4>
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
                        <p className="ml-4">Rating: {rating}</p>
                    </div>

                    <br />
                    <div className="flex gap-6">
                       {
                        user ?  <button onClick={() => handleWatchList(_id)} className="btn rounded-full px-4 text-white bg-[#9538E2]">Add to WatchList</button>
                        :
                        <button disabled onClick={() => handleWatchList(_id)} className="btn rounded-full px-4 text-white bg-[#9538E2]">Add to WatchList</button>
                       }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;