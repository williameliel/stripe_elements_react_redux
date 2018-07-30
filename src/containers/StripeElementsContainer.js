import { connect } from 'react-redux';
import StripeElements from '../components/StripeElements';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';
const mergeProps = () => ({
	stripePublishableKey: STRIPE_PUBLISHABLE_KEY
});

const StripeElementsContainer = connect(mergeProps)(StripeElements);

export default StripeElementsContainer;
