import { useLoaderData } from "react-router-dom";
import CardReview from "../components/CardReview";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import bgImg from '../assets/bg.jpg'
const AllReviews = () => {
    const allReviewsData = useLoaderData()
    const [allReviews, setAllReviews] = useState(allReviewsData)
    const [sortData, setSortData] = useState()

    const handleSortData = sortType => {
        setSortData(sortType);
        if (sortType === 'publish year') {
            const sortedYearList = [...allReviews].sort((a, b) => b.year - a.year);
            setAllReviews(sortedYearList)
        }
        if (sortType === 'ratings') {
            const sortedRatingsList = [...allReviews].sort((a, b) => b.rating - a.rating);
            setAllReviews(sortedRatingsList)
        }
    }

    const handleCategory = (categoryData) =>{
        const filteringData = allReviewsData.filter(f=> f.genres == categoryData)
        setAllReviews(filteringData)
    }


    return (
        <div className="pt-6">
            <div className="flex gap-4">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn bg-blue-400 text-3xl m-1"><IoMdMenu /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=>handleCategory("action")}><a>Action</a></li>
                        <li onClick={()=>handleCategory("adventure")}><a>Adventure</a></li>
                        <li onClick={()=>handleCategory("sport")}><a>Sport</a></li>
                        <li onClick={()=>handleCategory("racing")}><a>Racing</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn border-none m-1 py-3 px-6 bg-amber-900 text-white font-bold">
                        {
                            sortData ? `Sort by ${sortData}`:'Sort By:'
                            }
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSortData('publish year')} ><a>Year</a></li>
                        <li onClick={() => handleSortData('ratings')}><a>Rating</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    allReviews.map(review => <CardReview key={review._id} review={review}></CardReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;