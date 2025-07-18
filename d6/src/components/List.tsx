import React from 'react';
import Update from './Update';
// Đảm bảo đã tạo file Update.tsx và import đúng

const url = 'https://api.escuelajs.co/api/v1/products';

type Products = {
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

export default function List() {
  const [product, setProduct] = React.useState<Products[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [reload, setReload] = React.useState(0);
  const [editProductId, setEditProductId] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [reload]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : product.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No data found.</div>
      ) : (
        <>
          <table className="table-fixed min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="hover:bg-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[150px]">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {product.map((item) => (
                <tr key={item.id} className="hover:bg-gray-200">
                  <td className="px-6 py-4 text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">${item.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.category.name}</td>
                  <td className="px-6 py-4">
                    <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-[300px] overflow-hidden text-ellipsis">
                    {item.description}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setEditProductId(item.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Nếu đang chỉnh sửa thì hiển thị form cập nhật */}
          {editProductId && (
            <div className="mt-8">
              <Update
                productId={editProductId}
                onUpdateSuccess={() => {
                  setEditProductId(null);
                  setReload(prev => prev + 1); // reload lại danh sách
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
