import React from "react";
import BadgesListItem from "./BadgeListItem";
import { Link } from "react-router-dom";

function BadgesList(props) {
  const badges = props.badges;

  if (badges.length === 0) {
    return (
      <div>
        <h5 className="alert alert-secondary text-center">Data not found</h5>
      </div>
    );
  }

  return (
    <ul className="list-unstyled">
      {badges.map(badge => {
        return (
          <li key={badge.id}>
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
            >
              <BadgesListItem badge={badge} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default BadgesList;
