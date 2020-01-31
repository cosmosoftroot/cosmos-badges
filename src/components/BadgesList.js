import React from "react";
import BadgesListItem from "./BadgeListItem";
import { Link } from "react-router-dom";

function BadgesList(props) {
  const badges = props.badges;
  const [query, setQuery] = React.useState("");
  const filteredBadges = badges.filter((badge)=>{
    return badge.includes(query);
  })
 
  if (filteredBadges.length === 0) {
    return (
      <div>
        <h5 className="alert alert-secondary text-center">Data not found</h5>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control w-100"
          value={query}
          onChange={(e)=>{setQuery(e.target.value)}}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
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
    </div>
  );
}

export default BadgesList;
