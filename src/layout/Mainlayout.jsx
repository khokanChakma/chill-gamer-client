import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";


const Mainlayout = () => {
    return (
        <div className="container mx-auto">
            {/* Navber */}
            <Navber></Navber>
            {/* outlet */}
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;