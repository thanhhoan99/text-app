import React from 'react';
import styles from './RenderList2.module.css';

type Props = {
  image: string;
  discount: string;
  price: string;
  oldPrice: string;
  percentOff: string;
  title: string;
  sold: number;
  rating: number;
};

const RenderList2 = ({ image, discount, price, oldPrice, percentOff, title, sold, rating }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <div className={styles.discountBadge}>-{discount}</div>
      </div>
      <div className={styles.shop}>YOUNG SHOP</div>
      <div className={styles.price}>
        <span className={styles.current}>{price}</span>
        <span className={styles.old}>{oldPrice}</span>
        <span className={styles.off}>{percentOff}</span>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.rating}>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
      <div className={styles.sold}>Sold: {sold}</div>
    </div>
  );
};

export default RenderList2;
