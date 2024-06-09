import React from 'react';
import { Typography, Grid, Box, Card, CardContent, CardMedia } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card sx={{ backgroundColor: 'lightcoral' }}>
            <CardMedia
              component="img"
              alt="Person's Photo"
              height="auto"
              image="https://cdn4.sharechat.com/cutecartoongirlsphoto_3381dd44_1654487402174_sc_cmprsd_75.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_75.jpg"
              title="Person's Photo"
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                Hello! My name is Selma, and I am a student at International Burch University.
              </Typography>
              <Typography variant="body1" paragraph>
                This is the third project that I am making. This one is about our knowledge about ReactJS.
              </Typography>
              <Typography variant="body1">
                By selecting a certain thing in navbar, you can easily go through my project and see all the requirements that were needed for this project.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
