import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Grid } from '@material-ui/core'

import NewsItem from '../newsItem/NewsItem'

import useStyles from './style';


const News = ({ pageSize ,category}) => {
    const [data, setData] = useState({})

    useEffect(() => {
        getNews().then(res => {
            console.log({ res })
            setData(res.data);
        })

    },[])

    const getNews = async () => {
        const recievedNews = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=44050a4f3f6a48308b27288739475db6&pageSize=${pageSize}`);
        // console.log({recievedNews})
        return recievedNews;
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} >
                {data.articles && data.articles.map((article) => (
                    <Grid item xs={12} sm={6} md={4} key={article.url}>
                        <NewsItem
                            title={article.title}
                            description={article.description}
                            urlToImage={article.urlToImage}
                            url={article.url}
                            author={article.author}
                            publishedAt={article.publishedAt}
                            source={article.source.name}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default News

