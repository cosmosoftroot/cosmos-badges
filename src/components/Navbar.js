import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../images/logo.svg";
class Navbar extends React.Component {
  render() {
    return (
      /*los estilos utilizados son referencias a Bootstrap y Navbar.css */
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo" />
            <span className="font-weight-ligth">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
