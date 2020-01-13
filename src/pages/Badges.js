import React from "react";
import { Link } from "react-router-dom";
import "./styles/Badges.css";

import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import defaultAvatar from "../images/default_avatar.png";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");

    this.timeoutId = setTimeout(() => {
      this.setState({
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
      });
    }, 3000);

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");

    console.log({
      prevProps: prevProps, prevState: prevState
    })

    console.log({
      props: this.props, state: this.state
    })

  }

  componentWillUnmount(){
    console.log("6. componentWillUnmount()")
    clearTimeout(this.timeoutId)
  }

  render() {
    console.log("2/4. render()");
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
