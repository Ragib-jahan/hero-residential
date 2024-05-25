import { useParams } from "react-router-dom";



const VacationRentalsDetails = () => {
   const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
};

export default VacationRentalsDetails;