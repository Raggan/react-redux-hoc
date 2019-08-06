import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "components/App";
import Root from "Root";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,

  document.querySelector("#root")
);
