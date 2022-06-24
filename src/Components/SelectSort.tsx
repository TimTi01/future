import React, { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material'

interface SelectSortProps {
    sort: string,
    setSort: React.Dispatch<React.SetStateAction<string>>
}

export const SelectSort:FC<SelectSortProps> = ({sort, setSort}) => {
    const arrSort = ['relevance', 'newest']

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSort(event.target.value);
        console.log(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="Sort">Sort</InputLabel>
            <Select labelId="Sort" 
                    value={sort}
                    label="Sort"
                    onChange={handleChange}
            >
                {arrSort.map((item) => (
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