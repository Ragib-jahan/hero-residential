import { useLoaderData, } from "react-router-dom";

import Apartments from "./Apartments";
import SingleFamilyHouses from "./SingleFamilyHouses/SingleFamilyHouses";
import TownHouses from "./TownHouses/TownHouses";
import StudentHousing from "./StudentHousing/StudentHousing";
import SinorLivingCommunites from "./SiniorLivingCommunites/SinorLivingCommunites";
import VacationRentals from "./VacationRentals/VacationRentals";


const Home = () => {

    const segments = useLoaderData();
    console.log(segments)
    return (
        <div>
            <SingleFamilyHouses></SingleFamilyHouses>
            <TownHouses></TownHouses>
            <Apartments></Apartments>
            <StudentHousing></StudentHousing>
            <SinorLivingCommunites></SinorLivingCommunites>
            <VacationRentals></VacationRentals>

        </div>
    );
};

export default Home;