import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useUserAuth } from '../context/AuthContext';
import { Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NewsCard = () => {
  const { news } = useUserAuth();

  return (
    <>
      {news.map((ele, index) => {
        return (
          <Grid key={index} item xs={12} md={6}>
            <Box
              sx={{
                p: 2,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(212, 194, 252, 0.1)',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  position: 'relative', // Add relative position for positioning the like button
                }}
              >
                <CardMedia
                  component="img"
                  image={ele.urlToImage}
                  alt={ele.title}
                  sx={{
                    height: 200,
                    objectFit: 'cover',
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    filter: 'brightness(90%) contrast(120%)',
                    transition: 'filter 0.2s',
                    '&:hover': {
                      filter: 'brightness(100%) contrast(100%)',
                    },
                  }}
                />
                <CardContent sx={{ color: 'lightgray', flexGrow: 1, padding: '10px 16px' }}>
                  <Typography variant="h6">{ele.name}</Typography>
                  <Typography variant="h5" sx={{ marginBottom: '8px' }}>
                    {ele.title}
                  </Typography>
                  <Typography sx = {{color:'gray'}}variant="body1">{ele.description}</Typography>
                </CardContent>
                <IconButton
                  aria-label="Like"
                  sx={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <FavoriteIcon />
                </IconButton>
              </Card>
            </Box>
          </Grid>
        );
      })}
    </>
  );
};

export default NewsCard;
