import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import Home from "../Home";

const Contact = () => {
  return (
    <div>
      <Dashboard />
      <h3>Leave us a reply</h3>
      <p>We would love to hear from you</p>

      <Link to="/">back homw</Link>
    </div>
  );
};

export default Contact;
