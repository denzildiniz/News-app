import React from 'react'
import NewsItem from '../newsItem/NewsItem'

import article from '../../smaple.json'
import { useState } from 'react'

import { Grid } from '@material-ui/core'

const News = () => {
    const [data, setData] = useState(article)
    console.log(data.articles)
    return (
        <div>
            <Grid container spacing={2}>
                {data.articles?.map((news) => (
                    <Grid item xs={12} sm={4} md={3} key={news.url}>
                        <NewsItem
                            title={news.title}
                            description={news.description}
                            urlToImage={news.urlToImage}
                            url={news.url}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default News



