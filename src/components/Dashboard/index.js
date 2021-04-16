import React from "react";
import { Link, useHistory } from "react-router-dom";
import Contact from "../Contact";
import Home from "../Home";

export default function Dashboard() {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">logo</Link>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button onClick={() => history.push("/login")}>login</button>
    </div>
  );
}
