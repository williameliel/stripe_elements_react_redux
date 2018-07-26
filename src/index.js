import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import stripe from "./reducers";
import StripeElementsContainer from "./containers/StripeElementsContainer";
import ExternalButtonContainer from "./containers/ExternalButtonContainer";
import css from "./index.css";

const middleware = [thunk];

const store = createStore(
  stripe,
  {},
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <div>
      <StripeElementsContainer />
      <ExternalButtonContainer />
    </div>
  </Provider>,
  document.getElementById("root")
);
