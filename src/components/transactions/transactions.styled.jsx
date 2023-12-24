import styled from '@emotion/styled';
export const Overflow = styled.div`
  height: 200vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const TableHead = styled.thead`
  background-color: #4caf50;
  color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const TableR = styled.tr``;
export const TableH = styled.th`
  padding: 15px;
  text-align: left;
`;
export const TableBody = styled.tbody`
  background-color: #e0f7fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
export const TableD = styled.td`
  padding: 15px;
  &:first-child {
    background-color: #f4f4f4;
    font-weight: bold;
  }
`;
