import React, { useState, useEffect } from "react";
import { Typography, Box, Grid, Card, CardContent, CardMedia } from "@mui/material";

function AboutUs() {
  const [info, setInfo] = useState({
    title: "Fetching data...",
    description: "",
    team: [],
    mission: ""
  });

  useEffect(() => {
    setTimeout(() => {
      setInfo({
        title: "About Us",
        description: "We are small team that is making this project Three.",
        team: [
          {
            name: 'Selma Karasoftic',
            role: 'Boss',
            image: 'https://cdn4.sharechat.com/cutecartoongirlsphoto_3381dd44_1654487402174_sc_cmprsd_75.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_75.jpg',
            description: 'Selma is making this project.',
          },
          {
            name: 'VSC',
            role: 'Program',
            image: 'https://code.visualstudio.com/assets/branding/app-icon.png',
            description: 'VSC is used for making this program.',
          },
          {
            name: 'Chrome',
            role: 'Browser',
            image: 'https://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png',
            description: 'Via this browser we can see progress.',
          },
        ],
        mission: "Our mission is to finish this project."
      });
    }, 2000);
  }, []);

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h3" gutterBottom>{info.title}</Typography>
      <Typography variant="body1" paragraph>{info.description}</Typography>

      <Typography variant="h4" gutterBottom>
        Us
      </Typography>
      <Grid container spacing={3}>
        {info.team.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={member.name}
                height="auto"
                image={member.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          {info.mission}
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUs;
