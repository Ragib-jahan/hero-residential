import { useEffect, useState } from "react";
import SingleFamilyHouseCart from "./SingleFamilyHouseCart";


const SingleFamilyHouses = () => {

    const [singleFamilyHomes, setSingleFamilyHomes] = useState([])
    useEffect(() => {
        fetch('simgleFamilyHomes.json')
            .then(reg => reg.json())
            .then(data => setSingleFamilyHomes(data))
    }, [])

    console.log(singleFamilyHomes)


    return (
        <div className="mb-10">
            <h2 className="text-center text-3xl mb-10">Single Family Homes</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
                {
                    singleFamilyHomes.map((singleFamilyHome, idx) => <SingleFamilyHouseCart key={idx} singleFamilyHome={singleFamilyHome}></SingleFamilyHouseCart>)
                }
            </div>
        </div>
    );
};

export default SingleFamilyHouses;