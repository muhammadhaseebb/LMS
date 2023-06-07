"use client";

import React, { useState } from "react";

const AssignmentUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      fetch("/submitAssignment", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // Handle response from the backend
        })
        .catch((error) => {
          // Handle error
        });
    } else {
      // Handle case when no file is selected
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid gray",
        margin: "20px",
        background: "#eee",
        borderRadius: "4px",
      }}
    >
      <h2 style={{ fontSize: "26px" }}>Submit Assignment</h2>
      <p style={{ fontSize: "14px" }}>Please select a file to submit:</p>
      <input type="file" onChange={handleFileChange} />
      <button
        style={{
          padding: "5px 20px",
          borderRadius: 4,
          backgroundColor: "purple",
          color: "#FFF",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AssignmentUploader;
