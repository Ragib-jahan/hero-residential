import { useParams } from "react-router-dom";


const StudentHouseDetails = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
};

export default StudentHouseDetails;