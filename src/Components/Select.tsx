import React, { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select} from '@mui/material'


export const SelectComponent:FC = () => {
  return (
    <FormControl fullWidth>
        <InputLabel id="Categories">Categories</InputLabel>
        <Select labelId="Categories" 
                label="Categories"
        >
            <MenuItem>One</MenuItem>
            <MenuItem>Two</MenuItem>
            <MenuItem>Three</MenuItem>
        </Select>
    </FormControl>
  )
}
