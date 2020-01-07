import React from "react";
import { Link } from 'react-router-dom';
import "./styles/Badges.css";
import Navbar from "../components/Navbar";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import defaultAvatar from "../images/default_avatar.jpg";

class Badges extends React.Component {
  state = {
    data: [{
      id: '0101',
      firstName: 'Nata',
      lastName: 'Night',
      jobTitle: 'Data Marketing',
      email: 'nataly.fg@gmail.com',
      twitter: 'nfonseca',
    },
    {
      id: '0102',
      firstName: 'Katoxxxika',
      lastName: 'Sanchez',
      jobTitle: 'Human Rights',
      email: 'kalosaji@gmail.cm',
      twitter: 'resistencia',
    },
    {
      id: '0103',
      firstName: 'Adrian',
      lastName: 'Jackson',
      jobTitle: 'Engineer',
      email: 'sapitoadrian@gmail.com',
      twitter: 'adrianson',

    },
    {
      id: '0104',
      firstName: 'Ivan',
      lastName: 'Tesla',
      jobTitle: 'CEO Cosmosoft',
      email: 'tesla@gmail.cm',
      twitter: 'itesla',
    },
    {
      id: '0105',
      firstName: 'Meryxxx',
      lastName: 'Visions',
      jobTitle: 'Oráculo',
      email: 'sapitoadrian@gmail.com',
      twitter: 'mxxx',

    }]
  }
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
      </div>
    );
  }
}

export default Badges;
