import React from "react";
import "./styles/Background.css";
import img404 from "../images/img404.png";

function NotFound() {
  return (
    <div className="container-fluid background__stars__notfound">
      <img src={img404} alt="404" className="img404 mt-5" />
      <h1 className="msg404">Page Not Found</h1>
    </div>
  );
}

export default NotFound;
