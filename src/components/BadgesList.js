import React from 'react';

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="BadgeList__item row mb-3 p-2">
                <div className="col-md-3">
                  <img className="Badge__avatar card-img-top mt-1" src={this.props.avatarUrl} alt="avatar" />
                </div>
                <div className="col-md-9">
                
                    <h3 className="BadgeList__title">{badge.firstName} {badge.lastName}</h3>
                    <p className="BadgeList__jobTitle mt-3">{badge.jobTitle}</p>
                    <p className="BadgeList__twitter">@{badge.twitter}</p>

                </div>
              </div>

            </li>)
        })}
      </ul>
    )
  }
}



export default BadgesList;