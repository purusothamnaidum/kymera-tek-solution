import { useEffect, useState } from "react";
import { Update_Student_Api } from "../Utils/constants";

const UseUpdateStudent=()=>{
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [demoJoined, setDemoJoined] = useState('');
    const [remarks, setRemarks] = useState('');
    const [status, setStatus] = useState('');
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false);

    const handleUpdateClick = (student) => {
        setSelectedStudent(student);
        setDemoJoined(student.demoJoined || '');
        setRemarks(student.remarks || '');
        setStatus(student.status || '');
        setUpdateDialogOpen(true);
    };

    const handleUpdateDialogClose = () => {
        setUpdateDialogOpen(false);
        setSelectedStudent(null);
        setDemoJoined('');
        setRemarks('');
        setStatus('');
    };

    const UpdateStudent= async()=>{
        try {
            const updatedStudent = { ...selectedStudent, demoJoined, remarks, status };

            const response = await fetch(Update_Student_Api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedStudent),
            });

            if (!response.ok) {
                throw new Error('Failed to update student');
            }

            const updatedStudents = students.map((student) =>
                student.id === updatedStudent.id ? updatedStudent : student
            );
            setStudents(updatedStudents);

            handleUpdateDialogClose();
        } catch (error) {
            console.error('Failed to update student:', error);
        }
    }




    useEffect(()=>{
        UpdateStudent();
    },[]);

}
export default UseUpdateStudent;