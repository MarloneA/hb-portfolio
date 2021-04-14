import React, { useState, useEffect } from "react";
// import "./index.css";
import Banner from "../Banner";
import Dashboard from "../Dashboard";

const Home = () => {
  const [name, setName] = useState("Marlone");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://thatcopy.pw/catapi/rest/", {})
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-40">
      <Dashboard />
      <Banner name={name} email={email} data={data} />
    </div>
  );
};

export default Home;
