import React from 'react';

// Reusable Student Component receiving info and onDelete via props
function Student({ id, name, rollNo, department, email, onDelete }) {
  return (
    <div className="student-card">
      <div className="student-info">
        <h3>{name}</h3>
        <p><strong>Roll No:</strong> {rollNo}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Remove
      </button>
    </div>
  );
}

export default Student;
