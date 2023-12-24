import {
  Overflow,
  Table,
  TableHead,
  TableR,
  TableH,
  TableBody,
  TableD,
} from './transactions.styled';
export const Transactions = ({ user }) => {
  return (
    <Overflow>
      <Table>
        <TableHead>
          <TableR>
            <TableH>Type</TableH>
            <TableH>Amount</TableH>
            <TableH>Currency</TableH>
          </TableR>
        </TableHead>

        <TableBody>
          {user.map(({ type, amount, id, currency }) => (
            <TableR key={id}>
              <TableD>{type}</TableD>
              <TableD>{amount}</TableD>
              <TableD>{currency}</TableD>
            </TableR>
          ))}
        </TableBody>
      </Table>
    </Overflow>
  );
};
