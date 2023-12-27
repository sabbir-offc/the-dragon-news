import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params?.newsId);
    return (
        <Box my={8}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news?.thumbnail_url} width={800} height={500} alt={`image of ${news?.title}`} />
                        <Grid container spacing={1} mt={1}>
                            <Grid item lg={6}>
                                <Image src={news?.image_url} width={800} height={500} alt={`image of ${news?.title}`} />
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news?.image_url} width={800} height={500} alt={`image of ${news?.title}`} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="h5" component={'h2'}>
                            {news.title}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} mt={4}>
                            <Avatar src={news?.author?.img} />
                            <Typography>
                                By {news.author.name}
                            </Typography>
                            <Typography>
                                - {news.author.published_date}
                            </Typography>
                        </Box>
                        <Typography mt={3} sx={{ whiteSpace: 'pre-line' }} color={'gray'}>
                            {news.details}
                        </Typography>
                        <Typography variant="h6" mt={5}>
                            ``Many desktop publishing packages and web page editors now use as their default model text!
                        </Typography>
                        <Typography variant="h6" color={'gray'}>
                            -- Awlad Hossain
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;