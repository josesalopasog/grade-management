import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/students'; 

const studentService = {
    getAllStudents: async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data; 
        } catch (error) {
            console.error('Error fetching students:', error);
            throw error;
        }
    },

    getClassAverages: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/class-averages`);
            return response.data;
        } catch (error) {
            console.error('Error fetching class averages:', error);
            throw error;
        }
    },

    createStudent: async (studentData) => {
        try {
            const response = await axios.post(API_BASE_URL, studentData);
            return response.data;
        } catch (error) {
            console.error('Error creating student:', error);
            throw error;
        }
    },

    updateStudent: async (id, studentData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/${id}`, studentData);
            return response.data;
        } catch (error) {
            console.error('Error updating student:', error);
            throw error;
        }
    },
    deleteStudent: async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
        } catch (error) {
            console.error('Error deleting student:', error);
            throw error;
        }
    }
};

export default studentService;