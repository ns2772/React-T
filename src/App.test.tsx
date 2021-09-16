import React from "react";
import App from "./App";
import { render } from "./test-utils";

it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
