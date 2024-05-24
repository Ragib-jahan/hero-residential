import {
    createBrowserRouter,
   
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ApartmentDetails from "../Pages/ApartmentDetails";
import SingleFamilyHomeDetails from "../Pages/SingleFamilyHouses/SingleFamilyHomeDetails"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=> fetch('data.json')
        },
        {
            path: '/contact_us',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/Login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path: '/Apartment/:id',
            element: <ApartmentDetails></ApartmentDetails>
        },
        {
            path: '/singleFamilyHomes/:id',
            element: <SingleFamilyHomeDetails></SingleFamilyHomeDetails>
        }
      ]
    },
  ]);

export default router;