import React from "react";
import { render } from "@testing-library/react";
import { Display } from "./Display";

describe("<Display/>", () => {
  const players = [
    { name: "Alex Morgan", country: "United States", searches: 100 },
    { name: "Megan Rapinoe", country: "United States", searches: 99 },
    { name: "Marta", country: "Brazil", searches: 18 },
    { name: "Rose Lavelle", country: "United States", searches: 11 }
  ];
  it("is rendering", () => {
    render(<Display players={players} />);
  });
});
