import React from "react";
import BadgesListItem from "./BadgeListItem";
import SearchFilterInput from "./SearchFilterInput";
import { Link } from "react-router-dom";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <SearchFilterInput value={query} onChange={setQuery} />
        <div>
          <h5 className="alert alert-secondary text-center">Data not found</h5>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="BadgesList">
      <SearchFilterInput value={query} onChange={setQuery} />

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
