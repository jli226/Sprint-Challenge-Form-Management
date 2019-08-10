import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
