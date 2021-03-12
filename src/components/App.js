import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [today, setToday] = useState(new Date().getDate());

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
      <p>
        All bugs needs to be resolved by <b>3 days from the date it assigned</b>{" "}
        if it is not resolved by 3 days then it will highlighted as Red color
      </p>
      <table className="table table-default">
        <thead>
          <tr>
            <th>Bug Name</th>
            <th>Bug Description</th>
            <th>Assign to</th>
            <th>Assigned on</th>
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
                <tr
                  key={bug._id}
                  className={
                    today <=
                    parseInt(
                      bug.date
                        .toString()
                        .substring(0, bug.date.toString().indexOf("-"))
                    ) +
                      3
                      ? "table-default"
                      : "table-danger"
                  }
                >
                  <td>{bug.name}</td>
                  <td>{bug.description}</td>
                  <td>{bug.assignee}</td>
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
