import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, Grid,TableContainer, TableHead, TableRow, TextField, Paper, CircularProgress, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, MenuItem, IconButton, Pagination,
} from '@mui/material';
import { format } from 'date-fns';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import DownloadIcon from '@mui/icons-material/Download';
import useStudentActions from '../CustomHooks/useStudentActions';

const StudentsData = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [courseFilter, setCourseFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [page, setPage] = useState(1);
    const recordsPerPage = 10;

    const {updateDialogOpen,deleteDialogOpen,demoJoined,setDemoJoined,remarks,setRemarks,status,setStatus,handleUpdateClick,handleDeleteClick,handleUpdateDialogClose,handleDeleteDialogClose,handleUpdateStudent, handleDeleteStudent,
    } = useStudentActions(students, setStudents);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://techjobsolution.com/api/addStudent.php');
                if (!response.ok) {
                    const errorMessage = await response.text();
                    throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
                }
                const data = await response.json();
                const initializedData = data.map(student => ({
                    ...student,
                    demoJoined: student.demoJoined || '',
                    remarks: student.remarks || '',
                    status: student.status || ''
                }));
                setStudents(initializedData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatDate = (datetime) => {
        return format(new Date(datetime), 'dd/MM/yyyy');
    };

    const handleCourseFilterChange = (event) => {
        setCourseFilter(event.target.value);
    };

    const handleDateFilterChange = (event) => {
        setDateFilter(event.target.value);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleDownload = () => {
        const dataToDownload = filteredStudents.map(student => ({
            Date: formatDate(student.CurrentDatetime),
            ID: student.id,
            Name: student.Student_Name,
            PhoneNumber: student.PhoneNumber,
            Email: student.Email,
            Course: student.course,
            DemoJoined: student.demoJoined,
            Remarks: student.remarks,
            Status: student.status
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToDownload);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "StudentsData");
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(data, "StudentsData.xlsx");
    };

    const filteredStudents = students.filter((student) =>
        (courseFilter === '' || student.course.toLowerCase().includes(courseFilter.toLowerCase())) &&
        (dateFilter === '' || formatDate(student.CurrentDatetime).includes(dateFilter))
    );

    const paginatedStudents = filteredStudents.slice((page - 1) * recordsPerPage, page * recordsPerPage);

    return (
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px', color: '#783fbe' }}>Students Data</h2>
            <div style={{ marginBottom: '20px' }}>
                <TextField
                    variant="outlined"
                    style={{ marginRight: '10px', width: '300px' }}
                    placeholder="Filter by Course"
                    value={courseFilter}
                    onChange={handleCourseFilterChange}
                />
                <TextField
                    variant="outlined"
                    style={{ width: '300px' }}
                    placeholder="Filter by Date (dd/mm/yyyy)"
                    value={dateFilter}
                    onChange={handleDateFilterChange}
                />
                <IconButton
                    style={{ float: 'right' }}
                    color="primary"
                    onClick={handleDownload}
                >
                    <DownloadIcon />
                </IconButton>
            </div>
            {loading && <CircularProgress style={{ margin: '20px' }} />}
            {error && <Typography variant="body1" style={{ color: 'red' }}>Error: {error.message}</Typography>}
            {!loading && !error && (
                <TableContainer component={Paper} style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <Table aria-label="students table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Course</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Demo Status</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedStudents.map((student) => (
                                <TableRow key={student.id}>
                                    <TableCell>{formatDate(student.CurrentDatetime)}</TableCell>
                                    <TableCell>{student.id}</TableCell>
                                    <TableCell>{student.Student_Name}</TableCell>
                                    <TableCell>{student.PhoneNumber}</TableCell>
                                    <TableCell>{student.Email}</TableCell>
                                    <TableCell>{student.course}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="primary" onClick={() => handleUpdateClick(student)}>Update</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="error" onClick={() => handleDeleteClick(student)}>Delete</Button>
                                    </TableCell>
                                    <TableCell>{student.demoJoined}</TableCell>
                                    <TableCell>{student.remarks}</TableCell>
                                    <TableCell>{student.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Pagination
                        count={Math.ceil(filteredStudents.length / recordsPerPage)}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        style={{ margin: '20px auto' }}
                    />
                </TableContainer>
            )}

            <Dialog open={updateDialogOpen} onClose={handleUpdateDialogClose}>
                <DialogTitle>Update Student</DialogTitle>
                <DialogContent>
                    <Grid container spacing={4}>
                        <Grid item xs={12} mt={2}>
                            <FormControl fullWidth>
                                <TextField
                                    select
                                    label="Demo Status"
                                    value={demoJoined}
                                    onChange={(e) => setDemoJoined(e.target.value)}
                                    variant="outlined"
                                >
                                    <MenuItem value="Demo Joined">Demo Joined</MenuItem>
                                    <MenuItem value="Not Joined">Not Joined</MenuItem>
                                    <MenuItem value="Next demo">Next Demo</MenuItem>
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    select
                                    label="Status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    variant="outlined"
                                >
                                    <MenuItem value="Intrested">Interested</MenuItem>
                                    <MenuItem value="Not Intrested">Not Interested</MenuItem>
                                    <MenuItem value="Next Batch">Next Batch</MenuItem>
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                                label="Comments"
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                style={{ marginTop: '10px' }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateDialogClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdateStudent} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>Are you sure you want to delete this student?</DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose} color="primary">Cancel</Button>
                    <Button onClick={handleDeleteStudent} color="secondary">Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default StudentsData;
