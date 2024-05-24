import React from 'react';

const segment = ({segment}) => {
    console.log(segment)
    const fiendSingleFamilyHomes = segment.find(id => id == 'VR002')
    console.log(fiendSingleFamilyHomes)
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default segment;