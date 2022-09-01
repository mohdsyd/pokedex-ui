import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card/Card";

test("Display card", () => {
  render(
    <BrowserRouter>
      <Card name={"pikachu"} />
    </BrowserRouter>
  );

  const name = screen.getByTestId("pokemon-name");

  expect(name).toHaveTextContent("pikachu");
});
