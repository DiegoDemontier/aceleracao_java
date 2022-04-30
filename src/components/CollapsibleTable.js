import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from './Row';

export default function CollapsibleTable({ data, type }) {
  const [newData, setNewData] = React.useState([]);

  React.useEffect(() => {
    if (type === 'todos') setNewData(data);
    if (type !== 'todos') setNewData(data.filter(row => row.tipo === type));
  }, [type, data])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Desafio</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell align="right">Total de exercicios</TableCell>
            <TableCell align="right">Total acima de 80%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newData.map((row) => (
            <Row key={row.desafio} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
