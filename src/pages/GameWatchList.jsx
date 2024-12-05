import { useLoaderData } from "react-router-dom";

const GameWatchList = () => {
    const data = useLoaderData();
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
                           
                           
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map((singleData, index) => <tr key={singleData?._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img className="w-24 h-20" src={singleData?.coverImage} alt="" />
                                </td>
                                <td>{singleData?.title}</td>
                                <td>{singleData?.review}</td>
                                {/* <td className='space-x-2'>
                                    <button onClick={() => handleDelete(singleData?._id)} className="btn text-xl"><MdDeleteOutline /></button>
                                    <Link to={`/update/${singleData?._id}`}><button className="btn text-xl"><FiEdit /></button></Link>
                                    <button className="btn text-xl"><FaCheck /></button>
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GameWatchList;