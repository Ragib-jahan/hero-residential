import { useEffect, useState } from "react";
import SinorLivingCommunitesCard from "./SinorLivingCommunitesCard";


const SinorLivingCommunites = () => {

    const [sinorLivingCommunites, setSinorLivingCommunites] = useState([])
    useEffect(() => {
        fetch('seniorLivingCommunities.json')
            .then(reg => reg.json())
            .then(data => setSinorLivingCommunites(data))
    }, [])

    console.log(sinorLivingCommunites)

    return (
        <div className="mb-10">
            <h2 className="text-center text-3xl mb-10">Sinor Living Communites</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
                {
                    sinorLivingCommunites.map((sinorLivingCommunite, idx) => <SinorLivingCommunitesCard key={idx} sinorLivingCommunite={sinorLivingCommunite}></SinorLivingCommunitesCard>)
                }

            </div>
        </div>
    );
};

export default SinorLivingCommunites;