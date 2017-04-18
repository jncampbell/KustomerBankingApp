import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import './styles/bankForm.scss';

class BankForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleTransaction = this.handleTransaction.bind(this);
  }

  handleTransaction() {
    if (this.refs.amount.value) {
      const amount = parseFloat(parseFloat(this.refs.amount.value).toFixed(2));
      const timestamp = moment().format('MMM D, YYYY');
      this.props.processHandler(amount, timestamp);
      this.refs.amount.value = '';
    } else if (this.refs.amount.value < 0) {
      // Handle negative-value error
    } else {
      // Handle no-value error
    }
  }

  render() {
    const buttonClass = classNames(
      `${this.props.type === 'deposit' ?
      'bank-form__deposit-button' :
      'bank-form__withdraw-button'}`
    );
    
    return (
      <div className='bank-form'>
        <input placeholder='Enter amount' type='number' ref='amount' />
        <button className={buttonClass} onClick={this.handleTransaction}>Submit</button>
      </div>
    );
  }
}

BankForm.propTypes = {
  type: PropTypes.string,
  processHandler: PropTypes.func
}

export default BankForm;
