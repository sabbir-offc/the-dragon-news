import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sidebarImg from '@/assets/sidebarImg.png'
const SideBar = () => {
    return (
        <Box my={5}>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sidebarImg} alt="Top News" width={800} />
                    </CardMedia>
                    <CardContent>
                        <p className="bg-[#FF0000] w-fit text-white px-3 py-2 rounded-md my-4" >
                            Technolozy
                        </p>
                        <Typography gutterBottom variant="h6" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography variant="body2" my={2} color="text.secondary">
                            By Awlad Hossain - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card></Box>
    );
};

export default SideBar;