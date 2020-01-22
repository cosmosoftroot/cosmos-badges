import React from "react";
import Gravatar from "./Gravatar";

class BadgeListItem extends React.Component {
  render() {
    return (
      <div className="BadgeList__item row mb-3 p-2">
        <div className="col-md-3">
          <Gravatar
            className="Badge__avatar card-img-top mt-1"
            email={this.props.badge.email}
            alt="avatar"
          />
        </div>
        <div className="col-md-9">
          <h3 className="BadgeList__title">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </h3>
          <p className="BadgeList__jobTitle mt-3">
            {this.props.badge.jobTitle}
          </p>
          <p className="BadgeList__twitter">@{this.props.badge.twitter}</p>
        </div>
      </div>
    );
  }
}

export default BadgeListItem;
