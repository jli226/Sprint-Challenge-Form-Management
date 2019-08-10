import React from "react";
import ReactDOM from "react-dom";
import MealCard from "./MealCard";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

it("(<MealCard />) renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MealCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// unit test for element
it("(<MealCard />) is able to pass in props of name and be rendered in element without crashing", () => {
  const { getByTestId } = render(<MealCard name={"pizza"} />);
  expect(getByTestId("mealName").textContent).toBe("pizza");
});
