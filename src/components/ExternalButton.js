import React from 'react';

const ExternalButton = ({ handleOnClick, disabled, state }) => (
	<button disabled={disabled} onClick={handleOnClick}>
		Submit
	</button>
);

export default ExternalButton;
