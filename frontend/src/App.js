import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import CandidateForm from "./components/CandidateForm";
import CandidateList from "./components/CandidateList";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/add">Add Candidate</Link>
        </div>
        <h1 className="app-title">Candidate Management System</h1>
        <Routes>
          <Route path="/" element={<CandidateList />} />
          <Route path="/add" element={<CandidateForm />} />
          <Route path="/edit/:id" element={<CandidateForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;