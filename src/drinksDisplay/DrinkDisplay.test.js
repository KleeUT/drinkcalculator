import React from "react";
import ReactDOM from "react-dom";
import DrinksDisplay from "./DrinksDisplay";
import { createStore } from "redux";
const fakeReducer = state => {
  return state;
};

it("renders without crashing", () => {
  const store = createStore(fakeReducer, { app: { drinks: 0 } });
  const div = document.createElement("div");
  ReactDOM.render(<DrinksDisplay store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
