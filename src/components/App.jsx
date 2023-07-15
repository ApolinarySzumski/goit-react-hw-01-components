import { Profile } from './Profile';
import user from '../data/user';
import { Statistics } from './Statistics';
import data from '../data/data';
import { FriendList } from './FriendList';
import friends from '../data/friends';
import { Transactions } from './Transactions';
import transactions from '../data/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
