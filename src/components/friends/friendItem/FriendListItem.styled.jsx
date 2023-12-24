import styled from '@emotion/styled';
export const Card = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease, border-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.02) rotate(1deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;
export const Status = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #5cb85c;
  transition: background-color 0.3s ease;
  background-color: ${props => (props.isOnline !== false ? '#5cb85c' : 'red')};
`;
export const Img = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  border: 2px solid #5cb85c;
  box-shadow: 0 0 0 2px #fff;
  transition: transform 0.3s ease;
`;
export const Name = styled.p`
  margin: 0;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease, transform 0.3s ease;
`;
