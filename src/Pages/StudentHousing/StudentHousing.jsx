import { useEffect, useState } from "react";
import StudentHouingCard from "./StudentHouingCard";



const StudentHousing = () => {
    const [studentHousing, setStudentHousing] = useState([])
    useEffect(() => {
        fetch('studentHousing.json')
            .then(reg => reg.json())
            .then(data => setStudentHousing(data))
    }, [])

    console.log(studentHousing)
    return (
        <div className="mb-10">
            <h2 className="text-center text-3xl mb-10">Student Housing</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
                {
                    studentHousing.map((studentHouse, idx) => <StudentHouingCard key={idx} studentHouse={studentHouse}></StudentHouingCard>)
                }
            </div>
        </div>
    );
};

export default StudentHousing;