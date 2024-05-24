import { useParams } from "react-router-dom";

const TownHousesDetails = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
};

export default TownHousesDetails;