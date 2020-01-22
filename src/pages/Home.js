import React from "react";
import { Link } from "react-router-dom";
import "./styles/Background.css";

import logo from "../images/astronauts.svg";
import platziconf from "../images/platziconf-logo.svg";

const style_title = {
  color: "#FFF"
};

const logo_img = {
  width: "450px"
};

function Home() {
  return (
    <div className="container-fluid background__stars__home">
      <div>
        <img src={platziconf} alt="Platziconf logo" />
        <h1 className="mt-3 mb-3" style={style_title}>
          PRINT YOUR BADGES
        </h1>
        <Link to="/badges/new" className="btn btn-primary">
          Start now!!!
        </Link>
      </div>
      <img src={logo} alt="Logo" style={logo_img} className='ml-5' />
    </div>
  );
}
export default Home;
