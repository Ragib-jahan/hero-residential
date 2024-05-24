import { useLoaderData, } from "react-router-dom";

import Apartments from "./Apartments";
import SingleFamilyHouses from "./SingleFamilyHouses/SingleFamilyHouses";
import TownHouses from "./TownHouses/TownHouses";
import StudentHousing from "./StudentHousing/StudentHousing";


const Home = () => {

    const segments = useLoaderData();
    console.log(segments)
    return (
        <div>
            <SingleFamilyHouses></SingleFamilyHouses>
            <TownHouses></TownHouses>
            <Apartments></Apartments>
            <StudentHousing></StudentHousing>
            <h2>this is home: {segments.length}</h2>

        </div>
    );
};

export default Home;