import React from "react";
import { Link } from "react-router-dom";
import "./styles/Badges.css";

import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import defaultAvatar from "../images/default_avatar.png";

class Badges extends React.Component {
  state = {
    data: [
      {
        id: "0101",
        firstName: "Richard",
        lastName: "Stallman",
        jobTitle: "Activist and programmer",
        email: "no.more.microsoft@gmail.com",
        twitter: "rstallman"
      },
      {
        id: "0104",
        firstName: "Ivan",
        lastName: "Sanchez",
        jobTitle: "Full stack developer",
        email: "isanchez@comosoft.com",
        twitter: "cosmosftroot"
      },
      {
        id: "0105",
        firstName: "Nicola",
        lastName: "Tesla",
        jobTitle: "Genius",
        email: "nicotesla@gmail.com",
        twitter: "iknowall"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="" src={confLogo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} avatarUrl={defaultAvatar} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
