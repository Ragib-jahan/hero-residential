import React from 'react';
import { useParams } from 'react-router-dom';

const SinorLivingCommunitesDetails = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
};

export default SinorLivingCommunitesDetails;