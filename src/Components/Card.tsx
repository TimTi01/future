import React, { FC } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { VolumeInfo } from '../app/models/IBook'

export const CardComponent:FC<VolumeInfo> = ({imageLinks, categories, title, authors}) => {
  
  return (
    <Card sx={{maxWidth: 400}}>
        <CardMedia component='img'
                height='300px'
                width='300px'
                image={imageLinks?.smallThumbnail}
        />
        <CardContent sx={{width: 250}}>
            {categories?.map((cat) => (
                <Typography key={cat}>{cat}</Typography>
            ))}
            <Typography>{title ? title : 'Загрузка..'}</Typography>
            {authors?.map((author) => (
                <Typography key={author}>{author}</Typography>
            ))}
        </CardContent>
    </Card>
  )
}