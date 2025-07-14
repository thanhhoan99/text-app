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
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h3 className="font-semibold">{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => {
              handleOnClick(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}