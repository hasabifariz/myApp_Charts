import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

const index = (props) => {
  const {
    setSearchValue
  } = props
  return (
    <FormControl sx={{ m: 1, width: '40ch' }} size='small' variant="outlined">
      <OutlinedInput
        id="outlined-search"
        type='text'
        placeholder='Search Name Product'
        endAdornment={
          <InputAdornment position="end">

            <SearchIcon />
          </InputAdornment>
        }
        onKeyUp={(e) => setSearchValue(e.target.value)}
      />
    </FormControl>
  )
}

export default index