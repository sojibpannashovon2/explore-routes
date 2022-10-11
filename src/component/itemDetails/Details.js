import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div>
      <h1>User details page</h1>
      <p>Name {details.name}</p>
      <p>Name {details.phone}</p>
      <p>Name {details.website}</p>
    </div>
  );
};

export default Details;
