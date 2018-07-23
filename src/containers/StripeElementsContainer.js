import { connect } from "react-redux";
import { stripePublishableKey } from "../constants";

import StripeElements from "../components/StripeElements";

const mergeProps = () => ({
  stripePublishableKey
});

const StripeElementsContainer = connect(mergeProps)(StripeElements);

export default StripeElementsContainer;
