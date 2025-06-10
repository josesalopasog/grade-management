
const StudentsTable = ({ students }) => {

    if (students.length === 0) {
        return <p>There are no registered students. Add one to get started.</p>;
    }

    return (
        <div class="lg:col-span-3 bg-white rounded-xl shadow-md overflow-hidden">
            <div class="gradient-bg p-4">
                <h2 class="text-xl font-semibold text-white">
                    Students List
                </h2>
            </div>
            <div class="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Estudiante</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Java</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SQL</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mathematics</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">English</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{student.studentId}</td>
                                <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{student.javaScore}</td>
                                <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{student.sqlScore}</td>
                                <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{student.mathScore}</td>
                                <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{student.englishScore}</td>
                                <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{student.average ? student.average.toFixed(2) : 'N/A'}</td>
                                <td className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{student.rank}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsTable;