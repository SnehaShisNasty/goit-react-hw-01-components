import {
  Overflow,
  StatisticsCss,
  TitleCss,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <Overflow>
      <StatisticsCss>
        {title && <TitleCss>{title}</TitleCss>}
        <List>
          {data.map(({ label, percentage, id }) => (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          ))}
        </List>
      </StatisticsCss>
    </Overflow>
  );
};
