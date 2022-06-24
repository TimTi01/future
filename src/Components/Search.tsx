import React, { ChangeEvent, FC } from 'react'
import { TextField } from '@mui/material'

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Search:FC<SearchProps> = ({setSearch}) => {

  const onChange = (event: ChangeEvent<HTMLInputElement> ) => {
    console.log(event.target.value);
    setSearch(event.target.value)
  }

  return (
    <>
        <TextField variant="outlined"
                   onChange={onChange}
        />
    </>
  )
}
