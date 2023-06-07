import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignmentView = () => {
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    fetchAssignmentData();
  }, []);

  const fetchAssignmentData = async () => {
    try {
      const response = await axios.get('/api/assignments/:id');
      setAssignment(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {assignment ? (
        <div>
          <h1>{assignment.title}</h1>
          <p>Due Date: {assignment.dueDate}</p>
          <p>Created By: {assignment.createdBy}</p>
          {assignment.response.map((submission) => (
            <div key={submission._id}>
              <p>Submitted By: {submission.submittedBy}</p>
              <p>URL: <a href={submission.url}>{submission.url}</a></p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading assignment...</p>
      )}
    </div>
  );
};

export default AssignmentView;
