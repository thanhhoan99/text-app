import React, { useEffect, useState } from 'react';
import styles from '../styles.module.css';

const CATEGORY_API = 'https://api.escuelajs.co/api/v1/categories';

type Product = {
  id: number;
  title: string;
  price: number;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
  images: string[];
  description: string;
};

type Category = {
  id: number;
  name: string;
  image: string;
};

export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const PRODUCTS_PER_PAGE = 4;

  // 1. Fetch danh sách categories
  useEffect(() => {
    fetch(CATEGORY_API)
      .then(res => res.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  // 2. Fetch total product count mỗi khi chọn danh mục
  useEffect(() => {
    if (selectedCategoryId === null) return;

    fetch(`${CATEGORY_API}/${selectedCategoryId}/products`)
      .then(res => res.json())
      .then(data => {
        setTotalProducts(data.length);
      })
      .catch(console.error);
  }, [selectedCategoryId]);

 // 3. Fetch sản phẩm theo category & page
useEffect(() => {
  const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const url = selectedCategoryId === null
    ? `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${PRODUCTS_PER_PAGE}`
    : `${CATEGORY_API}/${selectedCategoryId}/products?offset=${offset}&limit=${PRODUCTS_PER_PAGE}`;

  fetch(url)
    .then(res => res.json())
    .then(setProducts)
    .catch(console.error);
}, [selectedCategoryId, currentPage]);


  const handleCheckboxChange = (id: number) => {
    // Nếu chọn lại thì bỏ chọn
    const newCategoryId = selectedCategoryId === id ? null : id;
    setSelectedCategoryId(newCategoryId);
    setCurrentPage(1); // Reset về trang 1 khi đổi danh mục
  };

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  return (
    <div className={styles.container}>
      <aside className={styles.filter}>
        <h3>Bộ lọc</h3>
        {categories.map((category) => (
          <label key={category.id}>
            <input
              type="checkbox"
              checked={selectedCategoryId === category.id}
              onChange={() => handleCheckboxChange(category.id)}
            />
            {category.name}
          </label>
        ))}
      </aside>

      <main className={styles.productList}>
        <h2>Danh sách sản phẩm</h2>
        <div className={styles.products}>
          {products.map(product => (
            <div key={product.id} className={styles.product}>
              <img src={product.images[0]} alt={product.title} />
              <p>{product.title}</p>
              <div className={styles.price}>
                <span className={styles.new}>
                  {product.price.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={page === currentPage ? styles.active : ''}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>

  );
}
