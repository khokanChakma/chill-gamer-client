import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";


const Mainlayout = () => {
    return (
        <div className="container mx-auto">
            {/* Navber */}
            <Navber></Navber>
            {/* outlet */}
            <Outlet></Outlet>
            {/* navber */}

        </div>
    );
};

export default Mainlayout;