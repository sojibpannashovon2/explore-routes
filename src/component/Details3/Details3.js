import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Details.css";
const Details3 = ({ another }) => {
  const { id, title, body } = another;
  //   console.log(another);
  const navigate = useNavigate();
  const navigateHandeller = () => {
    navigate(`/pop/${id}`);
  };

  return (
    <div className="details3">
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={navigateHandeller}>Show Details</button>
      <Link to={`/pop/${id}`}>Butto-2</Link>
      <button>
        <Link to={`/pop/${id}`}>{id}</Link>
      </button>
    </div>
  );
};

export default Details3;
