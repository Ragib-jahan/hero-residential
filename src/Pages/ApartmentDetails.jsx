import { useParams } from "react-router-dom";


const ApartmentDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default ApartmentDetails;