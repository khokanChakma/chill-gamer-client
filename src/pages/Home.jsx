import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRatedGame from "../components/HighestRatedGame";
import TypeScript from "../components/TypeScript";
import About from "../components/About";

const Home = () => {
    const highestData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TypeScript></TypeScript>
            <HighestRatedGame highestData={highestData}></HighestRatedGame>
            <About></About>

        </div>
    );
};

export default Home;