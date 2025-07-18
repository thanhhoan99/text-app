import React from 'react';
import { useCart } from '../Cart/CartContext';
import styles from './CartIcon.module.css';

type Props = {
  onClick: () => void;
};

const CartIcon: React.FC<Props> = ({ onClick }) => {
  const { totalItems } = useCart();
  return (
    <div className={styles.iconWrap} onClick={onClick}>
      <span className={styles.icon} role="img" aria-label="cart">🛒</span>
      {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
    </div>
  );
};

export default CartIcon;