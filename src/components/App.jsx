import user from 'db/user.json';
import data from 'db/data.json';
// import friends from 'db/friends.json';
// import transactions from 'db/transactions_.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
// import { FriendList } from 'components/FriendList/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={data} />

      {/* <FriendList friendList={friends} /> */}

      {/* <TransactionHistory transactionList={transactions} /> */}
    </div>
  );
};
