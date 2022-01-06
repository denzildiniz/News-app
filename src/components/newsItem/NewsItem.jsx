import { Button, Card, CardActions, CardContent, CardMedia, Typography, Badge } from '@material-ui/core'
import React from 'react'

import useStyles from './style';


const NewsItem = ({ title, description, urlToImage, url, author, publishedAt, source }) => {
    const classes = useStyles();
    return (
        <Card>
            <Badge badgeContent={source} color="secondary" anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}>
                <CardMedia
                    component="img"
                    alt={urlToImage}
                    height='auto'
                    image={urlToImage != null ? urlToImage : `https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/01/03/1012898-pandemic-fatigue-pixabay.jpg`}
                />
            </Badge>
            <CardContent>
                <Typography component='h4' gutterBottom >
                    {title && title.length > 64 ? `${title.slice(0, 64)}...` : title}
                </Typography>
                <Typography variant='body2' color="textSecondary" component="p" gutterBottom >
                    {description && description.length > 85 ? `${description.slice(0, 85)}...` : description}
                </Typography>
                <Typography variant="caption" display="block" className={classes.left}>
                    By: {author ? author : 'Unknown'} on: {new Date(publishedAt).toGMTString()}
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



// <Badge badgeContent={source} color="secondary" className={classes.badgeClass}>
// <CardMedia
//     component="img"
//     alt={urlToImage}
//     height='auto'
//     image={urlToImage != null ? urlToImage : `https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/01/03/1012898-pandemic-fatigue-pixabay.jpg`}
// />
// </Badge>