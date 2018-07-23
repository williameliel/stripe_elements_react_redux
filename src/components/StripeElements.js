import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import StripeFormElementContainer from "../containers/StripeFormElementContainer";

const StripeElements = ({ stripePublishableKey }) => (
  <StripeProvider apiKey={stripePublishableKey}>
    <Elements>
      <StripeFormElementContainer />
    </Elements>
  </StripeProvider>
);

export default StripeElements;
