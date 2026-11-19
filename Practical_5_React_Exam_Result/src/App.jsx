import React, { useState } from 'react';
import Student from './Student';

function App() {
  // Student basic info
  const studentInfo = {
    name: 'John Doe',
    rollNo: '2024CS042',
    department: 'Computer Science & Engineering',
    collegeName: 'City Engineering College'
  };

  // useState to accept marks for 5 subjects
  const [marks, setMarks] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: ''
  });

  const subjectNames = [
    { key: 'subject1', label: 'Mathematics' },
    { key: 'subject2', label: 'Data Structures' },
    { key: 'subject3', label: 'Operating Systems' },
    { key: 'subject4', label: 'Database Management' },
    { key: 'subject5', label: 'Computer Networks' }
  ];

  // Handle change in input marks
  const handleMarkChange = (e) => {
    const { name, value } = e.target;
    // Allow numbers between 0 and 100 or empty
    if (value === '' || (/^\d+$/.test(value) && Number(value) <= 100)) {
      setMarks((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Dynamic calculations
  const values = Object.values(marks);
  const allEntered = values.every((m) => m !== '');

  const numValues = values.map((m) => (m === '' ? 0 : Number(m)));
  const totalMarks = numValues.reduce((sum, curr) => sum + curr, 0);
  const percentage = allEntered ? (totalMarks / 5).toFixed(2) : '0.00';

  // Check PASS/FAIL: every subject must have at least 35 marks
  const isPassed = allEntered && values.every((m) => Number(m) >= 35);
  const resultStatus = allEntered ? (isPassed ? 'PASS' : 'FAIL') : 'Pending';

  return (
    <div className="container">
      <h1>Student Examination Result</h1>

      {/* Reusable Student Component */}
      <Student
        name={studentInfo.name}
        rollNo={studentInfo.rollNo}
        department={studentInfo.department}
        collegeName={studentInfo.collegeName}
      />

      {/* Marks Input Form */}
      <div className="card">
        <h2>Enter Subject Marks (Out of 100)</h2>
        <div className="marks-grid">
          {subjectNames.map((subj) => (
            <div key={subj.key} className="mark-field">
              <label>{subj.label}:</label>
              <input
                type="number"
                name={subj.key}
                placeholder="0 - 100"
                min="0"
                max="100"
                value={marks[subj.key]}
                onChange={handleMarkChange}
              />
              {marks[subj.key] !== '' && (
                <span className={`status-tag ${Number(marks[subj.key]) >= 35 ? 'pass-tag' : 'fail-tag'}`}>
                  {Number(marks[subj.key]) >= 35 ? 'Pass (>=35)' : 'Fail (<35)'}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Result Summary */}
      <div className="card result-card">
        <h2>Examination Summary</h2>
        <div className="result-stats">
          <div className="stat-box">
            <span className="stat-label">Total Marks</span>
            <span className="stat-value">{totalMarks} / 500</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Percentage</span>
            <span className="stat-value">{percentage}%</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Final Result</span>
            <span className={`stat-value status-${resultStatus.toLowerCase()}`}>
              {resultStatus}
            </span>
          </div>
        </div>

        {!allEntered && (
          <p className="hint-text">* Enter marks for all 5 subjects to see final result.</p>
        )}
      </div>
    </div>
  );
}

export default App;
