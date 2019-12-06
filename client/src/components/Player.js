import React from "react";

export function Player(props) {
  const {
    player: { name, country }
  } = props;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{country}</h3>
    </div>
  );
}
