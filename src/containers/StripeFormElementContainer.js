import { connect } from "react-redux";
import { injectStripe } from "react-stripe-elements";
import saveStripeElement from "../actions/saveStripeElement";
import StripeFormElement from "../components/StripeFormElement";

const mapDispatchToProps = dispatch => ({
  handleElementOnChange: (stripe, element) => {
    dispatch(saveStripeElement({ stripe, element }));
  }
});

const StripeFormElementContaniner = connect(
  null,
  mapDispatchToProps
)(StripeFormElement);

export default injectStripe(StripeFormElementContaniner);
