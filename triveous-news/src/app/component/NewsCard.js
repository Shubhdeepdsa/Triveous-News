import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react'
import { useUserAuth } from '../context/AuthContext'
import makeStyles from '@mui/material';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const NewsCard = () => {
    const { news } = useUserAuth()
    return (
        <>
            {
                news.map((ele) => {
                    { console.log(ele.title) }
                    return (
                        <Grid item xs={6}>
                            <Box sx={{ p: 2, backgroundColor: '#D4C2FC' }}>
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


export default NewsCard