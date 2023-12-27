import { getCategoryNews } from '@/utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async ({ searchParams }) => {
    const { data } = await getCategoryNews(searchParams.category)
    // console.log(data);
    return (
        <Box my={5}>
            <h1>Total {searchParams.category} news: {data.length} </h1>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data && data.map(news => <Grid key={news?._id} item xs={6}>
                        <Link href={`/${news.category.toLowerCase()}/${news?._id}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia sx={{
                                        '& img': {
                                            width: '100%',
                                            height: '250px'
                                        }
                                    }}>
                                        <Image src={news?.thumbnail_url} alt="Top News" width={800} height={200} />
                                    </CardMedia>
                                    <CardContent>
                                        <p className="bg-[#FF0000] w-fit text-white px-3 py-2 rounded-md my-4" >
                                            {news?.category}
                                        </p>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {news?.title.length > 30 ? news.title.slice(0, 20) + "..." : news.title}
                                        </Typography>
                                        <Typography variant="body2" my={2} color="text.secondary">
                                            By {news.author?.name} - {news?.author?.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.slice(0, 200)}...
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default DynamicNewsPage;