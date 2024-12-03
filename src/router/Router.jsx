import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import AllReviews from "../pages/AllReviews";
import MyReviews from "../pages/MyReviews";
import AddReview from "../pages/AddReview";
import GameWatchList from "../pages/GameWatchList";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/allReviews',
            element: <AllReviews></AllReviews>
        },
        {
            path:'/addReviews',
            element: <AddReview></AddReview>
        },
        {
            path:'/myReviews',
            element: <MyReviews></MyReviews>
        },
        {
            path:'/gameWatchList',
            element: <GameWatchList></GameWatchList>
        },
      ]
    },
  ]);

export default Router;