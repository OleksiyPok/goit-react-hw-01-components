import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//==============================================
//----------------------------------------------

// import user from 'path/to/user.json;

// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />

//----------------------------------------------

//==============================================

//----------------------------------------------

// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />

//----------------------------------------------

//==============================================

//----------------------------------------------

// import friends from 'path/to/friends.json';

// <FriendList friends={friends} />;

//----------------------------------------------

//==============================================

//----------------------------------------------

// import transactions from 'path/to/transactions.json';

// <TransactionHistory items={transactions} />;

//----------------------------------------------
