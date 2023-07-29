import React from "react";
import { Link } from "react-router-dom";
import "./Pagenotfound.css";

function Pagenotfound(props) {
  return (
    <div className="PageNotFound">
      <img
        alt="notfound"
        src="https://cdn-icons-png.flaticon.com/128/8215/8215827.png"
      />
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Pagenotfound;
