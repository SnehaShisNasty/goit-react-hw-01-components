import styled from '@emotion/styled';
export const Overflow = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StatisticsCss = styled.div`
  max-width: 300px;
  margin: 30px auto;
  background: #f5f5f5;
  border: 2px solid #333333;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;
export const TitleCss = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
  color: #333333;
  text-align: center;
`;
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li`
  min-width: 134px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    background: #f0f0f0;
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
export const Label = styled.span`
  align-text: center;
  margin-right: auto;
  font-weight: bold;
  font-size: 18px;
  color: #333333;
`;
export const Percentage = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #333333;
  text-align: center;
`;
