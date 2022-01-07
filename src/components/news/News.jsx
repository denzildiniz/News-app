import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Grid } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';

import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from '../newsItem/NewsItem'

import useStyles from './style';


const News = ({ pageSize, category }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState()
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        getNews().then(res => {
            // console.log({ res })
            // console.log(res.data.totalResults)
            setData(res.data);
            // console.log(data)
            setTotalResults(res.data.totalResults);
            setPage(page+1);
            // console.log(test)
        })

    }, [totalResults])

    const getNews = async () => {
        const recievedNews = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=44050a4f3f6a48308b27288739475db6&page=${page}&pageSize=${pageSize}`);
        // console.log({recievedNews})
        // console.log({totalResults})
        return recievedNews;
    }

    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=44050a4f3f6a48308b27288739475db6&page=${page}&pageSize=${pageSize}`;
        const fetchedData = await fetch(url);
        const parsedData = await fetchedData.json();
        // console.log(data)
        console.log({parsedData});
        setData(data.concat(parsedData.articles));
        // setData([...data, parsedData.articles]);
        setTotalResults(parsedData.totalResults);
        // console.log({ data })
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={data.length !== totalResults}
                loader={<CircularProgress color="secondary" />}
                style={{ 'overflow': 'hidden' }}
            >
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
            </InfiniteScroll>
        </div>
    )
}

export default News




