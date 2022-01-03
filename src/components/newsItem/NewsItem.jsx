import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'


const NewsItem = ({ title, description, urlToImage, url }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={urlToImage}
                height='auto'
                image={urlToImage}
            />
            <CardContent>
                <Typography component='h4' gutterBottom >
                    {title}
                </Typography>
                <Typography variant='body2' color="textSecondary" component="p">
                    {description}
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
