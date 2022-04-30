import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';

export default function BasicTextFields({ setUser, setType }) {
  const [currency, setCurrency] = React.useState('todos');
  const [name, setName] = React.useState('');
  const [on, setOn] = React.useState(true);

  const handleClick = () => {
    setUser(name);
    setType(currency);
    setOn(false);
  }

  const currencies = [
    { value: 'todos', label: 'Todos' },
    { value: 'Exercício', label: 'Exercício' },
    { value: 'Agregador', label: 'Desafio Agregador' }
  ];

  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '20ch' },
        '& .MuiTextField-root': { m: 1, width: '20ch' },
        '& button': { m: 2, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
      className="form"
    >
      <TextField
        id="outlined-basic"
        label="Usuário do GitHub"
        variant="outlined"
        onChange={(e) => {setName(e.target.value)}}
      />

      <TextField
          id="outlined-select-currency"
          select
          label="Selecionar tipo"
          disabled={ true && on }
          value={currency}
          onChange={(e) => {setCurrency(e.target.value)}}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          onClick={handleClick}
        >
          Pesquisar
        </Button>
    </Box>
    </>
  );
}