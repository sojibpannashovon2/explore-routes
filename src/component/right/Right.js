import React from "react";
import { useLoaderData } from "react-router-dom";

const Right = () => {
  const right = useLoaderData();
  console.log(right);
  return (
    <div>
      <h1>It right details</h1>
      <p>{right.title}</p>
    </div>
  );
};

export default Right;
