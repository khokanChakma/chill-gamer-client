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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/reviewData')
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('http://localhost:5000/reviews'),
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
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/update/:id',
                element: <UpdateCard></UpdateCard>,
                loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path: '/watchList',
                element: <PrivateRout><GameWatchList></GameWatchList></PrivateRout>,
                loader: ()=> fetch('http://localhost:5000/watchList')
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
                path: '/details/:id',
                element: <PrivateRout><Details></Details></PrivateRout>,
                loader: ({params})=>fetch(`http://localhost:5000/review/${params.id}`)
            },
        ]
    },
]);

export default Router;