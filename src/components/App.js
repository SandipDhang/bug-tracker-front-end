import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/bugs").then((res) => setData(res.data));
  }, []);
  return (
    <div className="container">
      <h1 className="header">
        List of All Available bugs{" "}
        <span>
          <Link to="/addbug" className="btn btn-primary links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            Add New Bug
          </Link>
        </span>
      </h1>
      <table className="table table-default">
        <thead>
          <tr>
            <th>Bug Name</th>
            <th>Bug Description</th>
            <th>Assign to</th>
            <th>Assigned on</th>
            <th>Resolved by</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td>No records found</td>
            </tr>
          ) : (
            data.map((bug) => {
              return (
                <tr key={bug._id}>
                  <td>{bug.name}</td>
                  <td>{bug.description}</td>
                  <td>{bug.assignee}</td>
                  <td>{bug.date}</td>
                  <td>{bug.date}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
