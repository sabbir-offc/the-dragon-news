import { Box, Divider, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import topNews from '@/assets/top news.png'
import topNews2 from '@/assets/latestNews2.png'
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async () => {
    const { data } = await getAllNews()
    // console.log(data)
    return (
        <Box my={5}>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={data[0].thumbnail_url} alt="Top News" width={800} height={200} />
                    </CardMedia>
                    <CardContent>
                        <p className="bg-[#FF0000] w-fit text-white px-3 py-2 rounded-md my-4" >
                            {data[0].category}
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            {data[0].title}
                        </Typography>
                        <Typography variant="body2" my={2} color="text.secondary">
                            By {data[0].author.name} - {data[0].author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[0].details.length > 200
                                ? data[0].details.slice(0, 200) + "..."
                                : data[0].details}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Divider sx={{ my: 5 }} />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {data.slice(0, 4).map(news => <Grid key={news._id} item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia sx={{
                                '& img': {
                                    width: '100%',
                                    height: '250px'
                                }
                            }}>
                                <Image src={news.thumbnail_url} alt="Top News" width={800} height={500} />
                            </CardMedia>
                            <CardContent>
                                <p className="bg-[#FF0000] w-fit text-white px-3 py-2 rounded-md my-4" >
                                    {news.category}
                                </p>
                                <Typography gutterBottom variant="h6" component="div">
                                    {news?.title.length > 30 ? news.title.slice(0, 20) + "..." : news.title}
                                </Typography>
                                <Typography variant="body2" my={2} color="text.secondary">
                                    By {news?.author.name} - {news?.author.published_date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {news.details.length > 200
                                        ? news.details.slice(0, 200) + "..."
                                        : news.details}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>)}


            </Grid>
        </Box>
    );
};

export default LatestNews;