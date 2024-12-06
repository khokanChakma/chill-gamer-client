import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
   
    const [myReviews, setMyReviews] = useState([]);
    // console.log(myReviews);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    }, [user])

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/reviews/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = myReviews.filter(myReview => myReview._id !== _id);
                            setMyReviews(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="">
                            <th>serial</th>
                            <th>cover Photo</th>
                            <th>Title</th>
                            <th>Review Description</th>
                            <th>User Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myReviews.map((singleData, index) => <tr key={singleData?._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img className="w-24 h-20" src={singleData?.coverImage} alt="" />
                                </td>
                                <td>{singleData?.title}</td>
                                <td>{singleData?.review}</td>
                                <td>{singleData?.email}</td>
                                <td className='space-x-2'>
                                    <button onClick={() => handleDelete(singleData?._id)} className="btn text-xl"><MdDeleteOutline /></button>
                                    <Link to={`/update/${singleData._id}`}><button className="btn text-xl"><FiEdit /></button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;