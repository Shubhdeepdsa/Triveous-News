import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react'
import { useUserAuth } from '../context/AuthContext'
import styled from '@emotion/styled';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
const GlassBox = styled(Box)(({ theme }) => ({
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(212,194,252, 0.3)', // Adjust the alpha value for transparency
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));
const NewsCard = () => {

    const { news } = useUserAuth()
    return (
        <>
            {
                news.map((ele) => {
                    { console.log(ele.title) }
                    return (
                        <Grid item xs={6}>
                            <Box sx={{
                                p: 2, backdropFilter: 'blur(10px)',
                                backgroundColor: 'rgba(212,194,252, 0.3)',
                                padding: '10px',
                                borderRadius: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">
                                            {ele.name}
                                        </Typography>
                                        <Typography variant="h5">
                                            {ele.title}
                                        </Typography>
                                        <Typography variant="body1">
                                            {ele.description}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        image={ele.urlToImage}
                                        alt={ele.title}
                                    />
                                </Card>
                            </Box>
                        </Grid>
                    )
                })
            }
        </>
    )

}


export default NewsCard;