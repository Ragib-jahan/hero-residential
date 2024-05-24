
import { useParams } from 'react-router-dom';

const singleFamilyHomeDetails = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
};

export default singleFamilyHomeDetails;