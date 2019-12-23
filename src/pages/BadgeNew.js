import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Iván"
                lastName="Sánchez"
                jobTitle="Fullstack JavaScript Developer"
                twitter="cosmosoftroot"
                avatarUrl="https://2.gravatar.com/avatar/b9c674ca7541ea962e68107fbc6cb335?s=400&d=mm"
              />
            </div>
            <div className='col-6'>
                <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
