import React from "react";

export function Player(props) {
  const {
    player: { name, country }
  } = props;
  return (
    <div className="Player">
      <h3 data-testid="name">{name}</h3>
      <pre> - </pre>
      <h3 data-testid="country">{country}</h3>
    </div>
  );
}
