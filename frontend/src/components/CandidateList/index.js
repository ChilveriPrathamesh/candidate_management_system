import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";

import "./index.css";

class CandidateList extends Component {
  state = {
    candidates: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchCandidates();
  }

  fetchCandidates = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      this.setState({ candidates: data });
    } catch (error) {
      console.error("Error fetching candidates :", error);
    }
  };

  handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      this.fetchCandidates();
    } catch (error) {
      console.error("Error deleting candidate : ", error);
    }
  };

  render() {
    const { candidates } = this.state;
    return (
      <div className="candidate-list-container">
        <div className="candidate-list-header">
          <h1 className="candidate-title">Candidate List</h1>
          <Link to="/add">
            <button className="candidate-list-add-btn">Add Candidate</button>
          </Link>
        </div>

        <table className="candidate-list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Resume</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td> {/* ID */}
                <td>{candidate.name}</td> {/* Name */}
                <td>{candidate.email}</td> {/* Email */}
                <td>{candidate.phone_number}</td> {/* Phone */}
                <td>{candidate.current_status}</td> {/* Status */}
                <td>
                  <a
                    href={candidate.resume_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="candidate-resume-link"
                  >
                    Resume View
                  </a>
                </td>
                <td>
                  <Link to={`/edit/${candidate.id}`}>
                    <button className="candidate-list-edit-btn">Edit</button>
                  </Link>
                  <button
                    className="candidate-list-delete-btn"
                    onClick={() => this.handleDelete(candidate.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CandidateList;
