import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { loadState, saveState } from "./util/LocalStorageStatePersister";
import reducers from "./reducers";

const previousState = loadState();
const appReducer = combineReducers(reducers);
const store = createStore(appReducer, previousState);
store.subscribe(() => {
  saveState(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
