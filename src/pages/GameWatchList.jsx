import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const GameWatchList = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext);
    const [userData,setUserData] = useState([])
    useEffect(()=>{
        const remainingData = data.filter(d=>d.email == user?.email)
        setUserData(remainingData);
    },[user?.email])
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
                            <th className="hidden md:block">Email</th>
                           
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            userData.map((singleData, index) => <tr key={singleData?._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img className="w-24 h-20 rounded-xl" src={singleData?.coverImage} alt="" />
                                </td>
                                <td>{singleData?.title}</td>
                                <td>{singleData?.review}</td>
                                <td className="hidden md:block">{singleData?.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GameWatchList;