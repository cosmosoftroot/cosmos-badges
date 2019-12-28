import React from "react";

import "./styles/Badges.css";
import Navbar from "../components/Navbar";
import confLogo from "../images/badge-header.svg";

class Badges extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="" src={confLogo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn-primary">
              New Badge
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
