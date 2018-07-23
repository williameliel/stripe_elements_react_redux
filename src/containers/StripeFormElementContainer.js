import { connect } from "react-redux";
import { injectStripe } from "react-stripe-elements";
import saveStripeElement from "../actions/saveStripeElement";
import StripeFormElement from "../components/StripeFormElement";

import { CardElement } from "react-stripe-elements";

const mapDispatchToProps = dispatch => ({
  handleOnChange: ({ stripe, element }) => {
    dispatch(saveStripeElement({ stripe, element }));
  }
});

const mergeProps = () => ({
  CardElement
});

const StripeFormElementContaniner = connect(
  mergeProps,
  mapDispatchToProps
)(StripeFormElement);

export default injectStripe(StripeFormElementContaniner);
