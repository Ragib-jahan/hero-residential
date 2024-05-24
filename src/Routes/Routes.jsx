import {
    createBrowserRouter,
   
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ApartmentDetails from "../Pages/ApartmentDetails";
import SingleFamilyHousesDietails from "../Pages/SingleFamilyHouses/SingleFamilyHousesDietails";
import PrivetRoutes from "./PrivetRoutes";

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
            element: <PrivetRoutes><ApartmentDetails></ApartmentDetails></PrivetRoutes>
        },
        {
            path: '/single_family_home/:id',
            element: <PrivetRoutes><SingleFamilyHousesDietails></SingleFamilyHousesDietails></PrivetRoutes>
        }
      ]
    },
  ]);

export default router;