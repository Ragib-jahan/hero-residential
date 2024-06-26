import { useEffect, useState } from "react";
import ApartmentPage from "./ApartmentPage";


const Apartments = () => {

    const [apartments, setApartments] = useState([])
    useEffect(() => {
        fetch('Apartments.json')
            .then(reg => reg.json())
            .then(data => setApartments(data))
    }, [])
    return (
        <div className="mb-10">
            <h2 className="text-center text-3xl mb-10">Apartment</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
                {
                    apartments.map((apartment, idx) => <ApartmentPage key={idx} apartment={apartment}></ApartmentPage>)
                }
            </div>
        </div>
    );
};

export default Apartments;