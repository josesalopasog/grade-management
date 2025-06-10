import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import studentService from '../../api/studentService';

import StudentForm from '../../components/StudentForm';
import StudentsTable from '../../components/StudentsTable';
import ClassAverages from '../../components/ClassAverages';

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [classAverages, setClassAverages] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStudentsAndAverages = async () => {
        setLoading(true);
        setError(null);
        try {
            const studentsData = await studentService.getAllStudents();
            setStudents(studentsData);

            const averagesData = await studentService.getClassAverages();
            setClassAverages(averagesData);
        } catch (err) {
            console.error('There was an error loading data:', err);
            setError('Data could not be loaded. Make sure the backend is working.');
            toast.error('Error loading data!');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudentsAndAverages();
    }, []);

    const handleAddStudent = async (studentData) => {
        setLoading(true);
        setError(null);
        try {
            await studentService.createStudent(studentData);
            toast.success('Student added successfully!');
            fetchStudentsAndAverages(); 
        } catch (err) {
            console.error('Error adding student:', err);
            setError('Error adding student. Please check your details.');
            toast.error('Error adding student!');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading..</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <StudentForm onAddStudent={handleAddStudent} />
                <ClassAverages averages={classAverages} />
                <StudentsTable students={students} />
            </div>
        </div>
    );
};

export default Dashboard;