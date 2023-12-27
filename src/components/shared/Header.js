import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from "@/assets/The Dragon News.png"
import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <Box sx

            py={5}>
            <Container sx={{ textAlign: 'center' }}>
                <Image src={headingImage} alt="Heading Image" width={500} height={500} style={{ margin: 'auto' }} />
                <Typography variant="body2" color={'gray'} my={1}>
                    Journalism Without Fear or Favour
                </Typography>
                <Typography color={'black'} fontWeight={600}>
                    {currentDate}
                </Typography>


            </Container>
        </Box>
    );
};

export default Header;