import { useParams } from "react-router-dom";


const SingleFamilyHousesDietails = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
};

export default SingleFamilyHousesDietails;