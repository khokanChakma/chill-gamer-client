import { Outlet, useLocation } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";


const Mainlayout = () => {
    const {user} = useContext(AuthContext);
    const homeLocation = useLocation();
    console.log(homeLocation.pathname)
    
    return (
        <div>
            {/* Navber */}
            <div className={`bg-[#018992] w-full mx-auto ${homeLocation.pathname === '/' && ' fixed z-10'}`}>
                <Navber></Navber>
            </div>
            {/* outlet */}
            <div>
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <div className="bg-[#018992]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainlayout;