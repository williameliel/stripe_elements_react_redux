export const saveElement = payload => dispatch =>
	dispatch({ type: 'SAVE_ELEMENT', payload });

export const saveStripe = payload => dispatch =>
	dispatch({ type: 'SAVE_STRIPE', payload });
