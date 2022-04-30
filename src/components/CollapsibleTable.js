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
  const [completed, setCompleted] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    let count = 0;
    if (type === 'todos') {
      setNewData(data);
      setTotal(data.reduce((acc, curr) => acc + curr.total ,0));
      data.forEach(row => {
        count += row.exercicios.filter(exercicio => exercicio.porcent > 80).length
      });
      setCompleted(count);
    } else if (type !== 'todos') {
        const filteredData = data.filter(row => row.tipo === type);

        setNewData(filteredData);
        setTotal(filteredData.reduce((acc, curr) => acc + curr.total ,0));

        data.filter(element => element.tipo === type).forEach(row => {
          count += row.exercicios.filter(exercicio => exercicio.porcent > 80).length
        });
        setCompleted(count);
    };
  }, [type, data])

  return (
    <TableContainer component={Paper}>
      <div className="info">
        <h3>Total de exercícios: {total}</h3>
        <h3>Total acima de 80%: {completed}</h3>
      </div>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Desafio</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell align="right">Quantidade de exercicios</TableCell>
            <TableCell align="right">Quantidade acima de 80%</TableCell>
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
