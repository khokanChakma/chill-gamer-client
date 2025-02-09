import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import AllReviews from "../pages/AllReviews";
import MyReviews from "../pages/MyReviews";
import AddReview from "../pages/AddReview";
import GameWatchList from "../pages/GameWatchList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../components/Details";
import UpdateCard from "../components/UpdateCard";
import PrivateRout from "./PrivateRout";
import ErrorPage from "../components/ErrorPage";
import About from "../components/About";
import Contact from "../components/Contact";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://chill-gamer-server-mocha.vercel.app/reviewData')
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('https://chill-gamer-server-mocha.vercel.app/reviews'),
                children:[
                    {
                        path: '/allReviews/:genres',

                    }
                ]
            },
            {
                path: '/addReviews',
                element: <PrivateRout><AddReview></AddReview></PrivateRout>
            },
            {
                path: '/myReviews',
                element: <PrivateRout><MyReviews></MyReviews></PrivateRout>,
                loader: () => fetch('https://chill-gamer-server-mocha.vercel.app/users')
            },
            {
                path: '/update/:id',
                element: <UpdateCard></UpdateCard>,
                loader: ({params})=> fetch(`https://chill-gamer-server-mocha.vercel.app/review/${params.id}`)
            },
            {
                path: '/watchList',
                element: <PrivateRout><GameWatchList></GameWatchList></PrivateRout>,
                loader: ()=> fetch('https://chill-gamer-server-mocha.vercel.app/watchList')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params})=>fetch(`https://chill-gamer-server-mocha.vercel.app/review/${params.id}`)
            },
        ]
    },
]);

export default Router;