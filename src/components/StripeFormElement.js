import React from "react";

const StripeFormElement = ({ stripe, CardElement, handleOnChange }) => (
  <CardElement onChange={element => handleOnChange({ element, stripe })} />
);

export default StripeFormElement;
