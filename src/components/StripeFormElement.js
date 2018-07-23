import React from "react";

import { CardElement } from "react-stripe-elements";

const StripeFormElement = ({ stripe, handleElementOnChange }) => {
  const handleOnChange = element => {
    handleElementOnChange(stripe, element);
  };
  return <CardElement onChange={handleOnChange} onReady={el => el.focus()} />;
};

export default StripeFormElement;
