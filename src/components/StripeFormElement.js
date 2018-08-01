import React from 'react';

const StripeFormElement = ({ stripe, CardElement, handleOnElementLoad, handleOnElementChange }) => {
  if (stripe) {
    handleOnElementLoad(stripe);
  }
  return <CardElement onChange={element => handleOnElementChange(element)} />;
};

export default StripeFormElement;
