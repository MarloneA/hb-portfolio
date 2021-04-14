import React from "react";

const Banner = ({ name, email, data }) => {
  const { id, url, description } = data;

  return (
    <div>
      <div>
        <h3>{`Welcome ${name} to hb-portfolio an my email is  ${email}`}</h3>
        <p>{id}</p>
        <p>{url}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
