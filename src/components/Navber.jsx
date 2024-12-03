import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

const Navber = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/'><li><a>Home</a></li></NavLink>
                        <NavLink to='/allReviews'><li><a>All Reviews</a></li></NavLink>
                        <NavLink to='/addReviews'><li><a>Add Review</a></li></NavLink>
                        <NavLink to='/myReviews'><li><a>My Reviews</a></li></NavLink>
                        <NavLink to='/gameWatchList'><li><a>Game WatchList</a></li></NavLink>
                    </ul>
                </div>
                <a className="cursor-pointer">
                    <img className="w-20" src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/'><li><a>Home</a></li></NavLink>
                    <NavLink to='/allReviews'><li><a>All Reviews</a></li></NavLink>
                    <NavLink to='/addReviews'><li><a>Add Review</a></li></NavLink>
                    <NavLink to='/myReviews'><li><a>My Reviews</a></li></NavLink>
                    <NavLink to='/gameWatchList'><li><a>Game WatchList</a></li></NavLink>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navber;