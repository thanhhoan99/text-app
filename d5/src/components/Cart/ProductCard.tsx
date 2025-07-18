import React from 'react';
import type { Product } from '../../types/product';
import { useCart } from '../../components/Cart/CartContext';
import styles from './ProductCard.module.css';

type Props = {
  product: Product;
};

function formatPrice(price: number) {
  return price.toLocaleString('vi-VN') + ' ₫';
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className={styles.card}>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.price}>{formatPrice(product.price)}</div>
      <div className={styles.qtyRow}>
        <button
          className={styles.qtyBtn}
          onClick={() => updateQuantity(product.id, (cartItem?.quantity || 0) - 1)}
          disabled={!cartItem || cartItem.quantity <= 0}
        >-</button>
        <span className={styles.qtyNum}>{cartItem?.quantity || 0}</span>
        <button
          className={styles.qtyBtn}
          onClick={() => addToCart(product)}
        >+</button>
      </div>
      <button className={styles.addBtn} onClick={() => addToCart(product)}>
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductCard;