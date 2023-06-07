import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = ({ match }) => {
  const [studentDashboard, setStudentDashboard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/viewdashboard/${match.params.id}`);
        setStudentDashboard(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [match.params.id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!studentDashboard) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Display student dashboard data here */}
      <div>{studentDashboard.name}</div>
      <div>{studentDashboard.rollno}</div>
      <Link to="/Assignment">Go to Assignment Screen</Link>
      <Link to="/SubmitAssignment">Go to Submit Assignment Screen</Link>
      {/* <Link to="/Quiz">Go to Quiz Screen</Link> */}
      <Link to="/Grade">Go to Grade Screen</Link>
      <Link to="/Marks">Go to Marks Screen</Link>
    </div>
  );
};

export default Dashboard;
