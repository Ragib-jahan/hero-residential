import { useLoaderData, } from "react-router-dom";

import Apartments from "./Apartments";
import SingleFamilyHouses from "./SingleFamilyHouses/SingleFamilyHouses";

const Home = () => {

    const segments = useLoaderData();
    console.log(segments)
    return (
        <div>
            <SingleFamilyHouses></SingleFamilyHouses>
            <Apartments></Apartments>
            <h2>this is home: {segments.length}</h2>

        </div>
    );
};

export default Home;