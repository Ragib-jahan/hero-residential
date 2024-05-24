import { useLoaderData, } from "react-router-dom";

import Apartments from "./Apartments";

const Home = () => {

    const segments = useLoaderData();
    console.log(segments)
    return (
        <div>
            <Apartments></Apartments>
            <h2>this is home: {segments.length}</h2>

        </div>
    );
};

export default Home;