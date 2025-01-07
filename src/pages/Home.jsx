import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import HighestRatedGame from "../components/HighestRatedGame";
import TypeScript from "../components/TypeScript";
import About from "../components/About";
import Subcribe from "../components/Subcribe";
import Contact from "../components/Contact";
import FaqQuestion from "../components/FaqQuestion";

const Home = () => {
    const highestData = useLoaderData();
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="container mx-auto">
                <TypeScript></TypeScript>
                <HighestRatedGame highestData={highestData}></HighestRatedGame>
                <FaqQuestion></FaqQuestion>
                <About></About>
                <Contact></Contact>
                <Subcribe></Subcribe>
            </div>

        </div>
    );
};

export default Home;