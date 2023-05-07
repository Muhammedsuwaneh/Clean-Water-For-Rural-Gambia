import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MultipleSelect({ onAmountChange }) {
  const [amount, setAmount] = React.useState(1);

  const handleChange = (event) => {
    setAmount(event.target.value);  
    onAmountChange(event.target.value);
  };

  return (
    <Box sx={{ display:"flex", alignItems: "center"}}>
      <Typography marginRight="10px">Select:</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Amount</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amount}
          label="Amount"
          onChange={handleChange}
        >
          <MenuItem value={1}>$1.00</MenuItem>
          <MenuItem value={5}>$5.00</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}