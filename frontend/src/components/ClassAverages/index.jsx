
const ClassAverages = ({ averages }) => {

    if (Object.keys(averages).length === 0) {
        return <p>No class averages available (add students first).</p>;
    }

    return (
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
            <div class="gradient-bg p-4">
                <h2 class="text-xl font-semibold text-white">
                    Average by class
                </h2>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li className="p-5 font-semibold">Java: {averages.java ? averages.java.toFixed(2) : 'N/A'}</li>
                <li className="p-5 font-semibold">SQL: {averages.sql ? averages.sql.toFixed(2) : 'N/A'}</li>
                <li className="p-5 font-semibold">Mathematics: {averages.math ? averages.math.toFixed(2) : 'N/A'}</li>
                <li className="p-5 font-semibold">English: {averages.english ? averages.english.toFixed(2) : 'N/A'}</li>
            </ul>
        </div>
    );
};

export default ClassAverages;