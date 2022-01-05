import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'


const NewsItem = ({ title, description, urlToImage, url }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={urlToImage}
                height='auto'
                image={urlToImage != null ? urlToImage : `https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/01/03/1012898-pandemic-fatigue-pixabay.jpg`}
            />
            <CardContent>
                <Typography component='h4' gutterBottom >
                    {title && title.length > 64 ? `${title.slice(0, 64)}...` : title}
                </Typography>
                <Typography variant='body2' color="textSecondary" component="p">
                    {description && description.length > 85 ? `${description.slice(0, 85)}...` : description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary' href={url} target='_blank' >
                    Read More...
                </Button>
            </CardActions>
        </Card>
    )
}

export default NewsItem
