import React from 'react';
import { useCart } from '../Cart/CartContext';
import styles from './CartDropdown.module.css';

function formatPrice(price: number) {
  return price.toLocaleString('vi-VN') + ' ₫';
}

const CartDropdown = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className={styles.dropdown}>
      <h4>Giỏ hàng của bạn</h4>
      {cart.length === 0 ? (
        <div className={styles.empty}>Chưa có sản phẩm</div>
      ) : (
        <ul className={styles.list}>
          {cart.map(item => (
            <li key={item.id} className={styles.item}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.qty}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </span>
              <span className={styles.price}>{formatPrice(item.price * item.quantity)}</span>
              <button className={styles.remove} onClick={() => removeFromCart(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.totalRow}>
        <span>Tổng cộng</span>
        <span className={styles.total}>{formatPrice(totalPrice)}</span>
      </div>
      <button className={styles.viewBtn}>Xem giỏ hàng</button>
    </div>
  );
};

export default CartDropdown;