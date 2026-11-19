import React from 'react';

// Reusable Student Component receiving student details via props
function Student({ name, rollNo, department, collegeName }) {
  return (
    <div className="student-header-card">
      <h2>Student Details</h2>
      <div className="student-details-grid">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Roll No:</strong> {rollNo}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>College:</strong> {collegeName}</p>
      </div>
    </div>
  );
}

export default Student;
