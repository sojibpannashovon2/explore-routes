import React from "react";
import { useLoaderData } from "react-router-dom";
import Toourslf from "../ourself-2/Toourslf";

const Ourself = () => {
  const ourself = useLoaderData();
  // console.log(ourself);
  return (
    <div>
      <h1>this is not myself or herself . It is about ourself </h1>

      <h1>Length: {ourself.length}</h1>
      {ourself.map((item) => (
        <Toourslf key={item.id} item={item}></Toourslf>
      ))}
    </div>
  );
};

export default Ourself;
