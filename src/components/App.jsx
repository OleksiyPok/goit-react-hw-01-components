import user from 'db/user.json';
import data from 'db/data.json';
import friends from 'db/friends.json';
import transactions from 'db/transactions_.json';

import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

export const App = () => {
  console.log(data);
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendList={friends} />
      <TransactionHistory transactionList={transactions} />
    </div>
  );
};
