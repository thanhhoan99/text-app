import React from 'react';
import styles from './RenderList1.module.css';

type Props = {
  image?: string;
  title?: string;
  price?: string;
  oldPrice?: string;
  discount?: string;
};

const RenderList1 = ({ image, title, price, oldPrice, discount }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {image && <img src={image} alt={title} />}
        {discount && <span className={styles.discount}>-{discount}</span>}
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>
          <span className={styles.currentPrice}>{price}</span>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default RenderList1;
