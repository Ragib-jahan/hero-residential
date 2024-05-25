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
import TownHousesDetails from "../Pages/TownHouses/TownHousesDetails";

import StudentHouseDetails from "../Pages/StudentHousing/StudentHouseDetails";
import ErrorPage from "../Pages/ErrorPage";
import SinorLivingCommunitesDetails from "../Pages/SiniorLivingCommunites/SinorLivingCommunitesDetails";
import VacationRentalsDetails from "../Pages/VacationRentals/VacationRentalsDetails";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:  <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=> fetch('data.json')
        },
        {
            path: '/contact_us',
            element: <PrivetRoutes><ContactUs></ContactUs></PrivetRoutes>
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
        },
        {
            path:'/townHomes/:id',
            element: <PrivetRoutes><TownHousesDetails></TownHousesDetails></PrivetRoutes>
        },
        {
            path: '/studentHouse/:id',
            element:<PrivetRoutes><StudentHouseDetails></StudentHouseDetails></PrivetRoutes>
        },
        {
            path: '/SinorLivingCommunites/:id',
            element:<PrivetRoutes><SinorLivingCommunitesDetails></SinorLivingCommunitesDetails></PrivetRoutes>
        },
        {
            path:'/vacationRental/:id',
            element: <PrivetRoutes><VacationRentalsDetails></VacationRentalsDetails></PrivetRoutes>
        },
        {
            path: '/profile',
            element: <PrivetRoutes><Profile></Profile></PrivetRoutes>
        }
      ]
    },
  ]);

export default router;