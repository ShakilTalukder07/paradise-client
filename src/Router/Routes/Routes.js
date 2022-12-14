import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Review from "../../Pages/ServiceAndReview/Review";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceAndReview from "../../Pages/ServiceAndReview/ServiceAndReview";
import SignUp from "../../Pages/SignUp/SignUp";
import ErrorPage from "../../shared/ErrorPage/ErroePage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allServices',
        element: <AllServices></AllServices>,
        loader: () => fetch("https://paradise-server.vercel.app/services")
      },
      {
        path: '/allServices/:id',
        element: <PrivateRoutes><ServiceAndReview></ServiceAndReview></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://paradise-server.vercel.app/services/${params.id}`),
      },
      {
        path: '/writeReview',
        element: <Review></Review>
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/myReviews',
        element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
      },
      {
        path: '/addService',
        element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
      },
      {
        path: '/login',
        element: <LogIn></LogIn>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      }
    ]
  }
])

export default router;