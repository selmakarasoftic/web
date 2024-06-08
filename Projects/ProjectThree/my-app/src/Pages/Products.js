import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard';

// Sample product data
const products = [
  {
    name: 'Product 1',
    description: 'This is a description of product 1.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 2',
    description: 'This is a description of product 2.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 3',
    description: 'This is a description of product 3.',
    image: 'https://via.placeholder.com/150',
  },
];

const Products = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
