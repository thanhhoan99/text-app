// src/context/CartProvider.jsx
import React, { createContext, useContext, useReducer } from 'react';

export type CartItem = {
  id: number;
  name: string;
  price: number;
};

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
}>({
  cart: [],
  addToCart: () => {},
});

const cartReducer = (state: CartItem[], action: { type: 'ADD_TO_CART', product: CartItem }) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart  = () => useContext(CartContext);