import {connect} from 'react-redux';
import {deposit, withdrawal} from '../../redux/actions';
import MainContainer from './MainContainer';

const mapStateToProps = (state) => ({
  balance: state.balance,
  recentTransactions: JSON.parse(JSON.stringify(state.recentTransactions))
});

const mapDispatchToProps = dispatch => ({
  processDeposit(amount, timestamp) {
    dispatch(deposit(amount, timestamp));
  },
  processWithdrawal(amount, timestamp) {
    dispatch(withdrawal(amount, timestamp));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
