import { getAllCategories } from '@/utils/getAllCategories';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {
    const allCategories = await getAllCategories();

    return (
        <div className='bg-gray-100 rounded'>
            <Box mt={5} px={4} py={2}>
                <Typography variant='h6'>
                    Categories
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Stack rowGap={1} mt={2.5}>
                    {
                        allCategories.map(category =>
                            <Button variant='outlined' key={category._id}>
                                <Link href={`/categories/news?category=${category.title.toLowerCase()}`} >
                                    {category.title}
                                </Link>
                            </Button>
                        )
                    }
                </Stack>
            </Box>
        </div>
    );
};

export default CategoryList;