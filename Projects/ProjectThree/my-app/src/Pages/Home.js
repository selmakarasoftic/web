import React, { useState } from "react";
import { Button, Box, Typography, Grid } from "@mui/material";

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h2" gutterBottom>Home</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1">Content Block 1</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1">Content Block 2</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1">Content Block 3</Typography>
        </Grid>
      </Grid>
      <Typography variant="body1">Count: {count}</Typography>
      <Button variant="contained" color="primary" onClick={increment}>
        Increment
      </Button>
    </Box>
  );
}

export default Home;
