import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const id = useParams();
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            details
        </div>
    );
};

export default Details;