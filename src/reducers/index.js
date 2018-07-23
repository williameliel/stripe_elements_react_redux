import { combineReducers } from "redux";

const stripeElements = (state = {}, { type, payload }) => {
  switch (type) {
    case "SAVE_STRIPE_ELEMENT":
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default combineReducers({ stripeElements });
