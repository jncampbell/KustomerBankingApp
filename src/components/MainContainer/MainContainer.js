import React from 'react';
import PropTypes from 'prop-types';
import BankForm from '../../components/BankForm';
import './styles/main-container.scss';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='bank'>
        <div className='bank-section bank__balance bank-balance'>
          <div className='bank-balance__text'>Your current balance is: </div>
          <div className='bank-balance__amount'>${this.props.balance.toFixed(2)}</div>
        </div>
        <div className='bank-section'>
          <div className='bank-section__cta'>Deposit Funds</div>
          <div className='bank-section__form'>
              <BankForm processHandler={this.props.processDeposit} type='deposit'/>
          </div>
        </div>
        <div className='bank-section'>
          <div className='bank-section__cta'>Withdraw Funds</div>
          <div className='bank-section__form'>
            <BankForm processHandler={this.props.processWithdrawal} type='withdrawal' />
          </div>
        </div>
        <div className='bank-section'>
           <div className='bank-section__cta'>Show Recent Transactions</div>
           <div className='bank-recent-transactions'>
             {/* Not happy with the following setup. Would refactor */}
            <div className="divTable" >
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className='divTableRow'>
                    <div className='divTableCell'>Date</div>
                    <div className='divTableCell'>Amount</div>
                    <div className='divTableCell'>Balance</div>
                  </div>
                  {this.props.recentTransactions.map((transaction, i) => {
                    return (
                    <div className='divTableRow' key={i}>
                      <div className='divTableCell'>{transaction.timestamp}</div>
                      <div className='divTableCell'>{transaction.type === 'withdrawal' ? "-" : ' '} {transaction.amount.toFixed(2)}</div>
                      <div className='divTableCell'>{transaction.balance.toFixed(2)}</div>
                    </div>
                   );
                  })}
                </div>
              </div>
            </div>

           </div>
      </div>
    </div>
    );
  }
}

MainContainer.propTypes = {
  balance: PropTypes.number.isRequired,
  processDeposit: PropTypes.func.isRequired,
  processWithdrawal: PropTypes.func.isRequired,
  recentTransactions: PropTypes.array
}

export default MainContainer;
