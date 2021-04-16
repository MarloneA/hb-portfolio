import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
// import "./index.css";
import Banner from "../Banner";
import Dashboard from "../Dashboard";

const Home = () => {
  const [name, setName] = useState("Marlone");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});
  const [preloadeddata, setpreloadeddata] = useState({});

  const [click, setClick] = useState("I am legend");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://thatcopy.pw/catapi/rest/", {})
      .then((res) => res.json())
      .then((result) => setpreloadeddata(result))
      .catch((error) => console.log(error));
  }, []);

  const fetchCatApi = () => {
    fetch("https://thatcopy.pw/catapi/rest/", {})
      .then((res) => res.json())
      .then((result) =>
        setUsers([
          {
            header: "Preston",
            description: "pres@gmail.com",
            link: "laksdjfl",
          },
          {
            header: "Marlon",
            description: "pres@gmail.com",
            link: "laksdjfl",
          },
          {
            header: "clau",
            description: "pres@gmail.com",
            link: "laksdjfl",
          },
          {
            header: "scovia",
            description: "pres@gmail.com",
            link: "laksdjfl",
          },
        ])
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-40">
      <Dashboard />
      <p>{data?.url || "awaiting user action"}</p>
      <button onClick={fetchCatApi}>fetch cat api</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>
              <p>{user.header}</p>
              <p>{user.description}</p>
              <p>{user.link}</p>
              {user.header === "Preston" ? <button>bufoonery</button> : "neey"}
            </div>
          </li>
        ))}
      </ul>

      {/* <Banner name={name} email={email} data={preloadeddata} /> */}
    </div>
  );
};

export default Home;
