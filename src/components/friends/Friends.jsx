import { Overflow } from './Friends.styled';
import { FriendListItem } from './friendItem/FriendListItem';
export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <Overflow>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          name={name}
          avatar={avatar}
          isOnline={isOnline}
          id={id}
        ></FriendListItem>
      ))}
    </Overflow>
  );
};
