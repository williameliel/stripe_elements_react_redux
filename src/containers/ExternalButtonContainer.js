import { connect } from 'react-redux';
import getStripeToken from '../actions/getStripeToken';
import ExternalButton from '../components/ExternalButton';

const mapDispatchToProps = dispatch => ({
  handleOnClick: ev => {
    ev.preventDefault();
    dispatch(getStripeToken());
  },
});

const mapStateToProps = state => ({
  disabled: !state.stripeElements.element.complete,
});

const ExternalButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExternalButton);

export default ExternalButtonContainer;
