import * as React from 'react';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Row({ row, setQuantity }) {
  const [open, setOpen] = React.useState(false);
  const exercisesDone = row.exercicios.filter(exercicio => exercicio.porcent > 80)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <a
            href={row.url}
            target = "_blank"
            rel = "noreferrer"
            className="links"
          >
            {row.desafio}
          </a>
        </TableCell>
        <TableCell align="right">{row.tipo}</TableCell>
        <TableCell align="right">{row.total}</TableCell>
        <TableCell align="right">{exercisesDone.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Pull Request</TableCell>
                    <TableCell>Porcentagem</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.exercicios.map((historyRow) => (
                    <TableRow key={historyRow.pull_url}>
                      <TableCell component="th" scope="row">
                        <a
                          href={historyRow.pull_url}
                          target = "_blank"
                          rel = "noreferrer"
                          className="links"
                          >
                            {historyRow.pull_url}
                          </a>
                      </TableCell>
                      <TableCell>{historyRow.porcent + '%'}</TableCell>
                      <TableCell align="right">
                        {historyRow.porcent > 80 ? 'Aprovado' : 'Reprovado'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
