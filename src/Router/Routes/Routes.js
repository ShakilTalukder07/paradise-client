import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
            path:'allServices',
            element:<AllServices></AllServices>,
            loader: () => fetch("http://localhost:5000/services"),
        },
        {
            path:'/blog',
            element:<Blog></Blog>,
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
      ]
    }
  ])
  
  export default router;