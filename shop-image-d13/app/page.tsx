'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "./types";
import Link from "next/link";

const baseUrl = 'https://api.escuelajs.co/api/v1/';
export const dynamic = 'force-dynamic'; // dùng cho SSR

// export default async function Home() {
  // let products: Product[] = [];

  // try {
  //   const res = await fetch(`${baseUrl}products?offset=0&limit=10`, {
  //     cache: 'no-store',
  //   });

  //   const data = await res.json();

  //   if (Array.isArray(data)) {
  //     products = data;
  //   } else {
  //     console.error("API không trả về mảng:", data);
  //   }
  // } catch (error) {
  //   console.error("Lỗi khi lấy sản phẩm:", error);
  // }
// const res = await fetch(`${baseUrl}products?offset=0&limit=10`, {
 
//      cache: 'no-store',
//   });

//   const products: Product[] = await res.json();




  //Loadding
export default  function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}products?offset=0&limit=10`, {
          cache: 'no-store',
        });
        const data = await res.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API không trả về mảng:", data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
      <>
    {loading ? (
      <p className="p-4">Đang tải dữ liệu...</p>
    ) : (
      <section className="bg-black text-white grid grid-cols-3 p-6 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-orange-100 text-black p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.category.name}</p>
              <p className="text-sm">Trị giá: <strong>{product.price} USD</strong></p>
              {product.images[0] && (
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain my-2"
                />
              )}
              <p className="text-sm line-clamp-3">{product.description}</p>
              <Link href={`/products/${product.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600">
                  Mua ngay
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-300">Không có sản phẩm nào.</p>
        )}
      </section>
     )}
  </>
  );
}
