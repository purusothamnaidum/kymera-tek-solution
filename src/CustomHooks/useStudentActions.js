import { useState } from 'react';
import { Delete_Student_Api, Update_Student_Api } from '../Utils/constants';

const useStudentActions = (students, setStudents) => {
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [demoJoined, setDemoJoined] = useState('');
    const [remarks, setRemarks] = useState('');
    const [status, setStatus] = useState('');

    const handleUpdateClick = (student) => {
        setSelectedStudent(student);
        setDemoJoined(student.demoJoined || '');
        setRemarks(student.remarks || '');
        setStatus(student.status || '');
        setUpdateDialogOpen(true);
    };

    const handleDeleteClick = (student) => {
        setSelectedStudent(student);
        setDeleteDialogOpen(true);
    };

    const handleUpdateDialogClose = () => {
        setUpdateDialogOpen(false);
        setSelectedStudent(null);
        setDemoJoined('');
        setRemarks('');
        setStatus('');
    };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
        setSelectedStudent(null);
    };

    const handleUpdateStudent = async () => {
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
    };

    const handleDeleteStudent = async () => {
        try {
            const response = await fetch(`${Delete_Student_Api}?id=${selectedStudent.id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
            }

            const updatedStudents = students.filter((student) => student.id !== selectedStudent.id);
            setStudents(updatedStudents);
            handleDeleteDialogClose();
        } catch (error) {
            console.error('Failed to delete student:', error);
        }
    };

    return {
        updateDialogOpen,
        deleteDialogOpen,
        demoJoined,
        setDemoJoined,
        remarks,
        setRemarks,
        status,
        setStatus,
        handleUpdateClick,
        handleDeleteClick,
        handleUpdateDialogClose,
        handleDeleteDialogClose,
        handleUpdateStudent,
        handleDeleteStudent,
    };
};

export default useStudentActions;
