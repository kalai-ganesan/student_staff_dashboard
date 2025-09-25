import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const BACKEND = process.env.REACT_APP_BACKEND || 'http://127.0.0.1:8000/api';

export default function Dashboard(){
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${BACKEND}/students/`).then(r=>r.json()).catch(()=>[]),
      fetch(`${BACKEND}/staff/`).then(r=>r.json()).catch(()=>[]),
    ]).then(([sdata, stf])=>{
      setStudents(sdata || []);
      setStaff(stf || []);
      setLoading(false);
    });
  }, []);

  if(loading) return <p>Loading data...</p>;

  // Prepare data for charts
  const attendanceData = students.map(s => ({ name: s.name, value: s.attendance }));
  const marksData = students.map(s => ({ name: s.name, marks: s.marks }));
  const staffWork = staff.map(s => ({ name: s.name, hours: s.workload_hours }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE'];

  return (
    <div>
      <h2>Attendance (per student)</h2>
      {attendanceData.length ? (
        <PieChart width={500} height={300}>
          <Pie data={attendanceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
            {attendanceData.map((entry, index) => <Cell key={`c-${index}`} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      ) : <p>No student attendance data</p>}

      <h2>Marks (bar)</h2>
      {marksData.length ? (
        <BarChart width={700} height={300} data={marksData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="marks" />
        </BarChart>
      ) : <p>No marks data</p>}

      <h2>Staff Workload</h2>
      {staffWork.length ? (
        <BarChart width={700} height={300} data={staffWork}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" />
        </BarChart>
      ) : <p>No staff data</p>}
    </div>
  );
}
