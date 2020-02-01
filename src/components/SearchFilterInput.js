import React from "react";

export default function SearchFilterInput(props) {
  return (
    <div className="form-group">
      <label>Filter Badges</label>
      <input
        autoFocus
        type="text"
        className="form-control w-100"
        value={props.value}
        onChange={e => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
}

 
