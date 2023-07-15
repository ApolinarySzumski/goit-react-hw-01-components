import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactionsHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <th>{transaction.type}</th>
            <th>{transaction.amount}</th>
            <th>{transaction.currency}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transaction: PropTypes.arrayOf({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
