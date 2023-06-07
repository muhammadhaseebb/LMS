import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewGrades() {
  const [studentId, setStudentId] = useState('');
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    if (studentId !== '') {
      fetchGrades();
    }
  }, [studentId]);

  const fetchGrades = async () => {
    try {
      const response = await axios.get(`/api/ViewGrades/${studentId}`);
      setGrades(response.data);
    } catch (error) {
      console.error('Error fetching grades:', error);
    }
  };

  const handleInputChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleButtonClick = () => {
    if (studentId !== '') {
      fetchGrades();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <div>
      <h2>Grades</h2>
      <div>
        <label htmlFor="studentId">Enter Student ID: </label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleButtonClick}>Fetch Grades</button>
      </div>
      <ul>
        {grades.map((mark, index) => (
          <li key={index}>{mark}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewGrades;