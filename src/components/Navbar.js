import React from "react";
import "./styles/Navbar.css";
import logo from "../images/logo.svg";
class Navbar extends React.Component {
  render() {
    return (
      /*los estilos utilizados son referencias a Bootstrap y Navbar.css */
      <div className="Navbar">
        <div className="container-fluid">
          <a className='Navbar__brand' href="/">
            <img className='Navbar__brand-logo' src={logo} alt="logo" />
            <span className="font-weight-ligth">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
