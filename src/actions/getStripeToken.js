const getStripeToken = () => (dispatch, getState) => {
  const { stripeElements } = getState();

  if (stripeElements.stripe && stripeElements.element.complete) {
    stripeElements.stripe.createToken().then(response => {
      console.log('[Token]', response);
    });
  }
};

export default getStripeToken;
