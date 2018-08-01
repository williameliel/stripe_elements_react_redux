import { connect } from 'react-redux';
import { injectStripe } from 'react-stripe-elements';
import { CardElement } from 'react-stripe-elements';

import { saveStripe, saveElement } from '../actions/saveStripeElement';

import StripeFormElement from '../components/StripeFormElement';

const mapDispatchToProps = dispatch => ({
  handleOnElementChange: element => dispatch(saveElement({ element })),
  handleOnElementLoad: stripe => dispatch(saveStripe({ stripe })),
});

const mergeProps = () => ({
  CardElement,
});

const StripeFormElementContainer = connect(
  mergeProps,
  mapDispatchToProps
)(StripeFormElement);

export default injectStripe(StripeFormElementContainer);
