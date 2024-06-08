import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  const handleButtonClick = () => {
    window.location.href = `https://en.wikipedia.org/wiki/${product.name}`;
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
        height="auto"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleButtonClick}>
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
