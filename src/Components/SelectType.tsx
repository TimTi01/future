import React, { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material'

interface SelectTypeProps {
  type: string,
  setType: React.Dispatch<React.SetStateAction<string>>
}

export const SelectType:FC<SelectTypeProps> = ({type, setType}) => {
  const arrFilter = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']

  const handleChange = (event: SelectChangeEvent<string>) => {
    setType(event.target.value);
    console.log(event.target.value);
  };

  return (
    <FormControl fullWidth>
        <InputLabel id="Types">Types</InputLabel>
        <Select labelId="Types"
                value={type}
                label="Types"
                onChange={handleChange}
        >
          {arrFilter.map((item) => (
            <MenuItem key={item} 
                      value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
    </FormControl>
  )
}