// src/components/ProductList.jsx
import { useNavigate } from 'react-router-dom';
import { useCart, type CartItem } from '../context/CartProvider';

const products = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 20 },
  { id: 3, name: 'Product C', price: 30 },
];

export default function ProductList() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
 const handleOnClick=(product: CartItem)=>{
    addToCart(product);
    navigate('/cart');
 }
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-md">
  {products.map(product => (
    <div key={product.id} className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mb-4">Price: <span className="font-medium">${product.price}</span></p>
      <button
        className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors w-full"
        onClick={() => handleOnClick(product)}
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>
  );
}