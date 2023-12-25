import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { AppCSS } from './App.styled';
import { Statistics } from './statistics/Statistics';
import { Viewport } from './viewport/Viewport';
import { FriendList } from './friends/Friends';
import { Transactions } from './transactions/transactions';

export const App = () => {
  return (
    <AppCSS>
      <Viewport user={user}></Viewport>
      <Statistics data={data} title=""></Statistics>
      <FriendList friends={friends} />
      <Transactions user={transactions}></Transactions>
    </AppCSS>
  );
};
