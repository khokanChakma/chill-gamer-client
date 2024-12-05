import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myReviews,setMyReviews] = useState([]);
    console.log(myReviews);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyReviews(data);
        })
    },[user])
    return (
        <div className="pt-6 bg-[#5de1ff]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {/* {
                myReviews.map(review => )
            } */}
            </div>
        </div>
    );
};

export default MyReviews;