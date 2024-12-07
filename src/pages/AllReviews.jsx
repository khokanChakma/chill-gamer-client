import { useLoaderData } from "react-router-dom";
import CardReview from "../components/CardReview";
import { IoMdMenu } from "react-icons/io";
const AllReviews = () => {
    const allReviews = useLoaderData()
    console.log(allReviews)


    return (
        <div className="pt-6 bg-[#5de1ff]">
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1"><IoMdMenu /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
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