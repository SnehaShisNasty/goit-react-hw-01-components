import styled from '@emotion/styled';

export const ProfileCss = styled.div`
  background: linear-gradient(to right, #3498db, #2980b9);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s ease-in-out;
  margin: auto;
  &: hover {
    transform: scale(1.05);
  }
`;

export const DescriptionCss = styled.div`
  text-align: center;
  padding: 20px;
  background: linear-gradient(to right, #3498db, #2980b9);
  color: #fff;
`;

export const AvatarCss = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 4px solid #fff;
`;

export const NameCss = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 5px 0;
  color: #2c3e50;
  text-transform: uppercase;
`;
export const TagCss = styled.p`
  font-size: 1.2em;
  color: #ecf0f1;
  margin: 5px 0;
  text-transform: lowercase;
`;

export const LocationCss = styled.p`
  color: #bdc3c7;
  margin: 5px 0;
  font-size: 1em;
  text-transform: lowercase;
`;

export const StatsCSS = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  background: linear-gradient(to right, #3498db, #2980b9);
  border-bottom: 2px solid #2980b9;
  overflow: hidden;
  border-radius: 10px;
`;

export const StatItemCss = styled.li`
  text-align: center;
  padding: 15px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #34495e;
    border-radius: 33%;
  }
`;
export const LabelCss = styled.p`
  color: #ecf0f1;
  font-size: 1em;
  font-weight: bold;
`;

export const QuantityCss = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #ecf0f1;
`;
