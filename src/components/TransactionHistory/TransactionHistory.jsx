import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ transactionList }) => {    
    return (        
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
        {transactionList.map(transaction => (
            <tbody key={transaction.id}>
                <tr>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            </tbody>))}
        </table>
    )    
}
