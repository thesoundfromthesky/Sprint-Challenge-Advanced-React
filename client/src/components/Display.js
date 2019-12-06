import React from "react";
import { Player } from "./Player";

export function Display(props = []) {
  const { players } = props;
  return (
    <div className="Display">
      {players.map((player, i) => (
        <Player key={i} player={player} />
      ))}
    </div>
  );
}
