import { combineReducers } from 'redux';
const initialState = {
	element: { complete: false }
};
const stripeElements = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SAVE_STRIPE':
		case 'SAVE_ELEMENT':
			return {
				...state,
				...payload
			};
		default:
			return state;
	}
};

export default combineReducers({ stripeElements });
