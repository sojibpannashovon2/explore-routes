import React from "react";
import { useLoaderData } from "react-router-dom";
import Details3 from "../Details3/Details3";

const Another = () => {
  const anothers = useLoaderData();

  return (
    <div>
      <h1>This is another page $</h1>
      {anothers.map((another) => (
        <Details3 key={another.id} another={another}></Details3>
      ))}
    </div>
  );
};

export default Another;
