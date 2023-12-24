import {
  ProfileCss,
  DescriptionCss,
  AvatarCss,
  LabelCss,
  QuantityCss,
  StatItemCss,
  StatsCSS,
  LocationCss,
  TagCss,
  NameCss,
} from './Profile.styled';

export const Profile = ({
  username,
  avatar,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileCss>
      <DescriptionCss>
        <AvatarCss src={avatar} alt={username} width={300} />
        <NameCss>{username}</NameCss>
        <TagCss>{tag}</TagCss>
        <LocationCss>{location}</LocationCss>
      </DescriptionCss>

      <StatsCSS>
        <StatItemCss>
          <LabelCss>Followers</LabelCss>
          <QuantityCss>{followers}</QuantityCss>
        </StatItemCss>
        <StatItemCss>
          <LabelCss>Views</LabelCss>
          <QuantityCss>{views}</QuantityCss>
        </StatItemCss>
        <StatItemCss>
          <LabelCss>Likes</LabelCss>
          <QuantityCss>{likes}</QuantityCss>
        </StatItemCss>
      </StatsCSS>
    </ProfileCss>
  );
};
