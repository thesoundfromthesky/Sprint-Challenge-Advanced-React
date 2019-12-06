import React from "react";
import { render } from "@testing-library/react";
import { Player } from "./Player";

describe("<Player/>", () => {
  const player = {
    name: "Alex Morgan",
    country: "United States"
  };
  let rtl;
  beforeEach(() => {
    rtl = render(<Player player={player} />);
  });

  it("has name", () => {
    const name = rtl.getByTestId("name");
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent(`${player.name}`);
  });

  it("has country", () => {
    const country = rtl.getByTestId("country");
    expect(country).toBeInTheDocument();
    expect(country).toHaveTextContent(`${player.country}`);
  });
});
