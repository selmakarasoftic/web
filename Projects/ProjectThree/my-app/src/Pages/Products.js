import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard';

const products = [
  {
    name: 'Coffee',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VMU_XIfPdL971fwHkoCc9KinhvVpPJPkeg&s',
    description: 'Coffee helped this project',
  },
  {
    name: 'Spotify',
    image: 'https://store-images.s-microsoft.com/image/apps.10546.13571498826857201.6603a5e2-631f-4f29-9b08-f96589723808.dc893fe0-ecbc-4846-9ac6-b13886604095?h=464',
    description: 'Spotify provided music.',
  },
  {
    name: 'YouTube',
    description: 'Youtube helped by providig various videos.',
    image: 'https://exchange4media.gumlet.io/news-photo/112901-109829-108730-youtube.jpg?w=400&dpr=2.6',
  },
  {
    name: 'Google',
    image: 'https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj',
    description: 'Google helped finding the materials.',
  }
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
