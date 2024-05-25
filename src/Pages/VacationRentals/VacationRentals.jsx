import { useEffect, useState } from "react";
import VacationRentalsCard from "./VacationRentalsCard";


const VacationRentals = () => {


        const [vacationRentals, setVacationRentals] = useState([])
        useEffect(() => {
            fetch('vacationRentals.json')
                .then(reg => reg.json())
                .then(data => setVacationRentals(data))
        }, [])
    
        console.log(vacationRentals)

    return (
        <div className="mb-10">
            <h2 className="text-center text-3xl mb-10">Vacation Rentals</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
            {
               vacationRentals.map((vacationRental, idx) => <VacationRentalsCard key={idx} vacationRental={vacationRental}></VacationRentalsCard>)
            }

            </div>
        </div>
    );
};

export default VacationRentals;