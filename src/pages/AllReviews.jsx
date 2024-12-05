import { useLoaderData } from "react-router-dom";
import CardReview from "../components/CardReview";
const AllReviews = () => {
    const allReviews = useLoaderData()
    return (
        <div className="pt-6 bg-[#5de1ff]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    allReviews.map(review => <CardReview key={review._id} review={review}></CardReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;