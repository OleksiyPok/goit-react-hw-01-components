import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendsList } from 'components/FriendsList';
import { TransactionHistory } from 'components/TransactionHistory';

import user from 'db/user.json';
import data from 'db/data.json';
import friends from 'db/friends.json';
import transactions from 'db/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friendsList={friends} />
      <TransactionHistory transactionList={transactions} />
    </div>
  );
};
