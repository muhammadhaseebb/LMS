import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewMarks() {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetchMarks();
  }, []);

  const fetchMarks = async () => {
    try {
      const response = await axios.get('/api/marks');
      setMarks(response.data);
    } catch (error) {
      console.error('Error fetching marks:', error);
    }
  };

  return (
    <div>
      <h2>Marks</h2>
      <div className="marks-table">
        <div>
          <span>Student ID</span>
          <span>Marks</span>
        </div>
        {marks.map((student) => (
          <div key={student.studentId}>
            <span>{student.studentId}</span>
            <span>
              {student.marks.map((mark, index) => (
                <span key={index}>{mark} </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMarks;