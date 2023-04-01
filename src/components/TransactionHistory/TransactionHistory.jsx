import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactionList }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactionList.map(transaction => (
        <tbody className={css.tbody} key={transaction.id}>
          <tr>
            <td className={css.td}>{transaction.type}</td>
            <td className={css.td}>{transaction.amount}</td>
            <td className={css.td}>{transaction.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  transactionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string.isRequired,
    })
  ),
};
