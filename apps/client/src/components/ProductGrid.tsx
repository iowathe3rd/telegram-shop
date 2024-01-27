import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductItem, { ProductItemsProps } from './ProductItem';

const mockProducts: ProductItemsProps[] = [
  {
    title: "Название продукта 1",
    price: 100,
    description: "Описание продукта 1",
    id: "product1",
    imgLink: "ссылка на изображение продукта 1"
  },
  {
    title: "Название продукта 2",
    price: 200,
    description: "Описание продукта 2",
    id: "product2",
    imgLink: "ссылка на изображение продукта 2"
  },
  {
    title: "Название продукта 3",
    price: 300,
    description: "Описание продукта 3",
    id: "product3",
    imgLink: "ссылка на изображение продукта 3"
  },
  {
    title: "Название продукта 4",
    price: 400,
    description: "Описание продукта 4",
    id: "product4",
    imgLink: "ссылка на изображение продукта 4"
  },
  {
    title: "Название продукта 5",
    price: 500,
    description: "Описание продукта 5",
    id: "product5",
    imgLink: "ссылка на изображение продукта 5"
  }
];

const ProductGrid: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {mockProducts.map((product) => (
          <Grid
            item
            key={product.id}
            xs={6}
          >
            <ProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              imgLink={product.imgLink}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
