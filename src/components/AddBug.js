import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const AddBug = () => {
  const [bugName, setBugName] = useState("");
  const [bugDesc, setBugDesc] = useState("");
  const [assignee, setAssignee] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  React.useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();

    setDate(`${day}-${month}-${year}`);
    setTime(`${hrs}:${min}`);
  }, []);

  const addNewBug = async (bug) => {
    const res = await axios
      .post("http://localhost:4000/addBug", bug)
      .then((response) => response.data);
    console.log(res);
    return res;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name: bugName,
      description: bugDesc,
      time: time,
      date: date,
      assignee: assignee,
    };
    console.log(obj);
    const res = await addNewBug(obj);
    res.status === 200
      ? alert(res.message)
      : alert("Something Went wrong. Try again");
  };
  return (
    <div className="container">
      <h1 className="header">
        Add a new bug report{" "}
        <span>
          <Link to="/" className="btn btn-primary links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            View All Bugs
          </Link>
        </span>
      </h1>
      <form className="row g-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="bugName" className="form-label">
            Bug Name
          </label>
          <input
            type="text"
            className="form-control"
            id="bugName"
            aria-describedby="emailHelp"
            onChange={(e) => setBugName(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="bugDesc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="bugDesc"
            onChange={(e) => setBugDesc(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="assignee" className="form-label">
            Assign to
          </label>
          <input
            type="text"
            className="form-control"
            id="assignee"
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="assignDate" className="form-label">
            Date
          </label>
          <input
            type="text"
            className="form-control"
            id="assignDate"
            readOnly
            value={date}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="assignTime" className="form-label">
            Time
          </label>
          <input
            type="text"
            className="form-control"
            id="assignTime"
            readOnly
            value={time}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddBug;
