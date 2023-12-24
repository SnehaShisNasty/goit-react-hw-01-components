import { ViewportCss } from './Viewport.styled';
import { Profile } from '../profile/Profile';
export const Viewport = ({ user }) => {
  return (
    <ViewportCss>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
    </ViewportCss>
  );
};
