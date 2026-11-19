import React, { useState } from 'react';
import Student from './Student';

function App() {
  // useState hook to maintain the student list
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', rollNo: 'CS101', department: 'Computer Science', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', rollNo: 'IT202', department: 'Information Technology', email: 'bob@example.com' }
  ]);

  // useState hook for form inputs
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle adding a new student
  const handleAddStudent = (e) => {
    e.preventDefault();

    if (!name.trim() || !rollNo.trim() || !department.trim() || !email.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      rollNo: rollNo.trim(),
      department: department.trim(),
      email: email.trim()
    };

    setStudents([...students, newStudent]);

    // Reset input fields
    setName('');
    setRollNo('');
    setDepartment('');
    setEmail('');
  };

  // Function to remove a student
  const handleRemoveStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Management</h1>

      {/* Form to add a new student */}
      <form onSubmit={handleAddStudent} className="student-form">
        <h2>Add New Student</h2>
        <div className="form-row">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="add-btn">Add Student</button>
      </form>

      {/* Display student list */}
      <div className="student-list-section">
        <h2>Student List ({students.length})</h2>
        {students.length === 0 ? (
          <p className="no-students">No students found. Add one above!</p>
        ) : (
          <div className="student-grid">
            {students.map((student) => (
              <Student
                key={student.id}
                id={student.id}
                name={student.name}
                rollNo={student.rollNo}
                department={student.department}
                email={student.email}
                onDelete={handleRemoveStudent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
