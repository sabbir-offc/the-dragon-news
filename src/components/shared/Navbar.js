"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'
import Link from 'next/link';
import Header from './Header';
const navMenu = [
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
        pathName: '/categories/news?category=all-news'
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

const Navbar = () => {
    return (
        <>
            <Header />
            <AppBar position="static" sx={{ backgroundColor: 'black', color: 'white' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Image src={logo} alt='logo' width={100} height={100} />
                        <Box className="w-full text-center">
                            {navMenu.map((menu) => (
                                <Link key={menu.pathName} href={menu.pathName}>
                                    <Button className='text-white'>
                                        {menu.route}

                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box>
                            <Stack direction={'row'} sx={{
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
                            </Stack>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;
