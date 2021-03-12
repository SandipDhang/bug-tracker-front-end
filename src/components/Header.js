import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bug Tracker Application</h1>
        <h5>
          Backend is running with <b>Node</b>, <b>Express</b> and <b>MongoDB</b>
        </h5>
      </header>
    </div>
  );
};

export default Header;
