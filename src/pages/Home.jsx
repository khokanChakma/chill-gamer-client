import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRatedGame from "../components/HighestRatedGame";

const Home = () => {
    const highestData = useLoaderData();
    console.log(highestData)
    return (
        <div>
            <Banner></Banner>
            <HighestRatedGame highestData={highestData}></HighestRatedGame>
        </div>
    );
};

export default Home;