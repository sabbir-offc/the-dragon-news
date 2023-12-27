import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook'
import Link from "next/link";
const Footer = () => {
    const footerMenu = [
        {
            route: "Home",
            pathName: '/'
        },
        {
            route: "Pages",
            pathName: '/pages'
        },
        {
            route: "Category",
            pathName: '/category'
        },
        {
            route: "News",
            pathName: '/news'
        },
        {
            route: "Post",
            pathName: '/post'
        },
        {
            route: "Contact",
            pathName: '/contact'
        },

    ]

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{
                    "& svg": {
                        color: 'white'
                    }
                }}>

                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {footerMenu.map((menu) => (
                        <Link key={menu.pathName} href={menu.pathName}>
                            <Button className='text-white'>
                                {menu.route}

                            </Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant="body2" sx={{ color: 'gray', textAlign: 'center' }}>
                    © 2023 Dragon News. Design by Programming Hero
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;