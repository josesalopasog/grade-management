import { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
    const [newStudent, setNewStudent] = useState({
        javaScore: '',
        sqlScore: '',
        mathScore: '',
        englishScore: ''
    });

    const handleNewStudentChange = (e) => {
        const { name, value } = e.target;
        setNewStudent(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {
            javaScore: parseInt(newStudent.javaScore),
            sqlScore: parseInt(newStudent.sqlScore),
            mathScore: parseInt(newStudent.mathScore),
            englishScore: parseInt(newStudent.englishScore)
        };

        onAddStudent(studentData);
        setNewStudent({
            javaScore: '',
            sqlScore: '',
            mathScore: '',
            englishScore: ''
        });
    };

    return (
        <div class="lg:col-span-1 bg-white rounded-xl shadow-md overflow-hidden">
            <div class="gradient-bg p-4">
                <h2 class="text-xl font-semibold text-white">
                    Add Student
                </h2>
            </div>
            <div class="p-6">
                <form onSubmit={handleSubmit} class="space-y-4">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Java Score:
                            <input
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                type="number"
                                name="javaScore"
                                value={newStudent.javaScore}
                                onChange={handleNewStudentChange}
                                required
                                min="0"
                                max="100"
                            />
                        </label>
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            SQL Score:
                            <input
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                type="number"
                                name="sqlScore"
                                value={newStudent.sqlScore}
                                onChange={handleNewStudentChange}
                                required
                                min="0"
                                max="100"
                            />
                        </label>
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Math Score:
                            <input
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                type="number"
                                name="mathScore"
                                value={newStudent.mathScore}
                                onChange={handleNewStudentChange}
                                required
                                min="0"
                                max="100"
                            />
                        </label>
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            English Score:
                            <input
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                type="number"
                                name="englishScore"
                                value={newStudent.englishScore}
                                onChange={handleNewStudentChange}
                                required
                                min="0"
                                max="100"
                            />
                        </label>
                    </div>
                    <button type="submit" className='w-full gradient-bg text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center cursor-pointer'>Add student</button>
                </form>
            </div>
        </div>
    );
};

export default StudentForm;