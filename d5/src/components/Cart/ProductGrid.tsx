import React from 'react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

const ProductGrid = () => (
  <div className={styles.grid}>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductGrid;