import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRatedGame from "../components/HighestRatedGame";
import TypeScript from "../components/TypeScript";
import About from "../components/About";
import Subcribe from "../components/Subcribe";

const Home = () => {
    const highestData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <TypeScript></TypeScript>
            <HighestRatedGame highestData={highestData}></HighestRatedGame>
            <Subcribe></Subcribe>
            <About></About>

        </div>
    );
};

export default Home;