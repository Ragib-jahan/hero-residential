import TownHousesCard from "./TownHousesCard";
import { useEffect, useState } from "react";

const TownHouses = () => {

    const [townHomes, setTownHomes] = useState([])
    useEffect(() => {
        fetch('townHouse.json')
            .then(reg => reg.json())
            .then(data => setTownHomes(data))
    }, [])

    console.log(townHomes)

    return (
        <div className="mb-10">
            <h2 className="text-center text-3xl mb-10">Town Houses</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
            {
                townHomes.map((townHome, idx) => <TownHousesCard key={idx} townHome={townHome}></TownHousesCard>)
            }

            </div>
        </div>
    );
};

export default TownHouses;