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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/addReviews',
                element: <AddReview></AddReview>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/gameWatchList',
                element: <GameWatchList></GameWatchList>
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
                element: <Details></Details>,
                loader: ({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
            },
        ]
    },
]);

export default Router;