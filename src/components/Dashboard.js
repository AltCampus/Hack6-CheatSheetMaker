import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="md-link">
          <Link to="/github">Github</Link>
          <Link to="/md">Markdown</Link>
        </div>
      </div>
    );
  }
}
