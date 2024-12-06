import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateCard = () => {
    const { user } = useContext(AuthContext)
    const userName = user?.displayName;
    const userEmail = user?.email;
    const updateUser = useLoaderData();
    const {genres,year,rating,coverImage,review,title,_id} = updateUser

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const coverImage = form.coverImage.value;
        const title = form.title.value;
        const review = form.review.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genres = form.genres.value;
        const email = form.email.value;
        const name = form.name.value;
        const updatedData = {
            coverImage: coverImage,
            title: title,
            review: review,
            rating: rating,
            year: year,
            genres: genres,
            email: email,
            name: name
        }
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "updated successfully",
                    });
                }
            })


    }
    return (
        <div className='pb-8'>
            <div className="text-center p-4">
                <h1 className="text-3xl font-bold">Update Review!</h1>
            </div>
            <div className="md:w-3/4 mx-auto card rounded-none bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit}  className="card-body">
                    {/* Cover Image and title row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Game Cover Image</span>
                            </label>
                            <input type="text" defaultValue={coverImage} name='coverImage' placeholder="Cover Image" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Game Title</span>
                            </label>
                            <input type="text" defaultValue={title} name='title' placeholder="Game Title" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* review and rating row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Review Description</span>
                            </label>
                            <input type="text" defaultValue={review}  name='review' placeholder="Review Description" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Rating</span>
                            </label>
                            <input type="text" defaultValue={rating} name='rating' placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* publishing year and genres row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Publishing year</span>
                            </label>
                            <input type="text" defaultValue={year} name='year' placeholder="Publishing year" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Genres</span>
                            </label>
                            <select className="input input-bordered" defaultValue={genres} name="genres">
                                <option value='action'>Action</option>
                                <option value='adventure'>Adventure</option>
                                <option value='sport'>Sport</option>
                                <option value='fighting'>Fighting</option>
                                <option value='racing'>Racing</option>
                                <option value='shooter'>Shooter</option>
                            </select>
                        </div>
                    </div>
                    {/* user email and name row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">User Email</span>
                            </label>
                            <input type="text" name='email' value={userEmail} placeholder="Publishing year" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">User Name</span>
                            </label>
                            <input type="text" name='name' value={userName} placeholder="Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCard;