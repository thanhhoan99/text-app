import React, { useState } from 'react';
import './ViewedProducts.module.css';

type Product = {
  id: number;
  image: string;
  name: string;
  price?: string;
  status?: string; // ví dụ: "Ngừng kinh doanh"
};

const initialProducts: Product[] = [
  {
    id: 1,
    image: '/assets/166.png',
    name: 'vivo Y18 8GB/128GB',
    price: '4.410.000đ',
  },
  {
    id: 2,
    image: '/assets/166.png',
    name: 'FESTINA 40 mm Nam F20007/2',
    price: '3.646.000đ',
  },
  {
    id: 3,
    image: '/assets/166.png',
    name: 'Samsung Galaxy A55 5G 8GB/256GB',
    status: 'Ngừng kinh doanh',
  },
  {
    id: 4,
    image: '/assets/166.png',
    name: 'Samsung Galaxy A56 5G 12GB/256GB',
    price: '11.480.000đ',
  },
];

const ViewedProducts = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const removeItem = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const clearAll = () => {
    setProducts([]);
  };

  return (
    <div className="viewed-container">
      <div className="header">
        <h3>Sản phẩm đã xem</h3>
        <button className="clear-btn" onClick={clearAll}>Xóa lịch sử</button>
      </div>
      <div className="product-list" style={{ display: 'flex', overflowX: 'auto' }}>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="info">
              <div className="name">{product.name}</div>
              {product.status ? (
                <div className="status">{product.status}</div>
              ) : (
                <div className="price">{product.price}</div>
              )}
            </div>
            <button className="remove" onClick={() => removeItem(product.id)}>×</button>
          </div>
        ))}
        <div className="scroll-btn">{'>'}</div>
      </div>
    </div>
  );
};

export default ViewedProducts;
