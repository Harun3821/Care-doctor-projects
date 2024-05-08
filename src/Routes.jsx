import { createBrowserRouter } from "react-router-dom";
import Root from "./Mainroot/Root";
import Home from "./Pages/Home";
import Login from "./Login/Login";
import Singup from "./Singup/Singup";
import Checkout from "./Pages/Checkout";
import Bookiengs from "./Pages/Bookiengs";
import Privetroute from "./Pages/Privetroute";





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
        },
        {
          path:'checkout/:id',
          element:<Checkout/>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<Privetroute><Bookiengs></Bookiengs></Privetroute>,
        }


        
      ]
    },
  ]);

