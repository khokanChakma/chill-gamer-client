import { useLoaderData } from "react-router-dom";

const MyReviews = () => {
    const myReviews = useLoaderData()
    console.log(myReviews)
    return (
        <div>
            
        </div>
    );
};

export default MyReviews;