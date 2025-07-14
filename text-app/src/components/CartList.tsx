// src/components/CartList.jsx
import { useCart } from '../context/CartProvider';

export default function CartList() {
  const { cart } = useCart();

  if (cart.length === 0) return <p className="p-4">Cart is empty</p>;

  return (
    <div className="p-6 border rounded max-w-md mx-auto bg-white shadow" style={{ maxWidth: 1530 }}>
  <h2 className="font-bold text-xl mb-4 text-gray-800">Cart Items</h2>
  <ul>
    {cart.map(({ id, name, price }, index) => (
      <li key={`${id}-${index}`} className="flex justify-between border-b border-gray-200 py-2">
        <span className="text-gray-700">{name}</span>
        <span className="font-semibold text-gray-900">${price}</span>
      </li>
    ))}
  </ul>
</div>
  );
}