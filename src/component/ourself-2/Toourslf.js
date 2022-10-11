import React from "react";
import { Link } from "react-router-dom";
import "./Toourslf.css";
const Toourslf = ({ item }) => {
  const { id, name, email, phone, username } = item;

  return (
    <div className="toself">
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>
        Phone: <small>{phone}</small>
      </p>
      <p>
        <small>
          Username:
          <Link to={`/top/${id}`}>{username}</Link>
        </small>
      </p>
    </div>
  );
};

export default Toourslf;
