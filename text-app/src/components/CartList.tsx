// src/components/CartList.jsx
import { useCart } from '../context/CartProvider';

export default function CartList() {
  const { cart } = useCart();

  if (cart.length === 0) return <p className="p-4">Cart is empty</p>;

  return (
    <div className="p-4 border rounded max-w-md mx-auto">
      <h2 className="font-bold mb-2">Cart Items</h2>
      <ul>
        {cart.map(({ id, name, price }, index) => (
          <li key={`${id}-${index}`} className="flex justify-between border-b py-1">
            <span>{name}</span>
            <span>${price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}