import { createBrowserRouter } from "react-router-dom";
import Root from "./Mainroot/Root";
import Home from "./Pages/Home";
import Login from "./Login/Login";
import Singup from "./Singup/Singup";





export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      children:[
        {
            path:'/',
            element:<Home/>,
        },
        {
          path:'/login',
          element:<Login/>,
        },
        {
          path:'/singup',
          element:<Singup/>,
        }
        
      ]
    },
  ]);

