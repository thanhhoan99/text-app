import React, { useEffect, useState } from 'react';

const productUrl = 'https://api.escuelajs.co/api/v1/products';

type Props = {
  productId: number;
  onUpdateSuccess?: () => void;
};

export default function Update({ productId, onUpdateSuccess }: Props) {
  const [formData, setFormData] = useState({
    title: '',
    price: 0,
    categoryId: 0,
    image: '',
    description: ''
  });
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await res.json();
        setCategories(data.map((c: any) => ({ id: c.id, name: c.name })));
      } catch (err) {
        console.error("Error loading categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch product details by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${productUrl}/${productId}`);
        const data = await res.json();
        setFormData({
          title: data.title,
          price: data.price,
          categoryId: data.category.id,
          image: data.images[0],
          description: data.description
        });
      } catch (err) {
        console.error('Error loading product:', err);
      }
    };
    fetchProduct();
    
  }, [productId]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: id === 'price' || id === 'categoryId' ? Number(value) : value
    }));
   
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      price: formData.price,
      description: formData.description,
      categoryId: formData.categoryId,
      images: [formData.image]
    };
    try {
      const res = await fetch(`${productUrl}/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Update failed');
      const data = await res.json();
      console.log('Update success:', data);
      if (onUpdateSuccess) onUpdateSuccess();
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Update Product</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-2">Title</label>
          <input
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="input"
            placeholder="Product title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-bold text-gray-700 mb-2">Price</label>
          <input
            id="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            className="input"
            placeholder="Product price"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="categoryId" className="block text-sm font-bold text-gray-700 mb-2">Category</label>
          <select
            id="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select category</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
          <input
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="input"
            placeholder="https://..."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold text-gray-700 mb-2">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="input"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
