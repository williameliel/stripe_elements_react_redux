const saveStripeElement = payload => dispatch => {
  dispatch({ type: "SAVE_STRIPE_ELEMENT", payload });
};

export default saveStripeElement;
