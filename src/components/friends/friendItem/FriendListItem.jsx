import { Card, Status, Img, Name } from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Card key={id}>
      <Status isOnline={isOnline}></Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Card>
  );
};
