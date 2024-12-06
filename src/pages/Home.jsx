import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRatedGame from "../components/HighestRatedGame";
import TypeScript from "../components/TypeScript";

const Home = () => {
    const highestData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TypeScript></TypeScript>
            <HighestRatedGame highestData={highestData}></HighestRatedGame>

        </div>
    );
};

export default Home;