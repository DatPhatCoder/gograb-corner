import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext({
  cart: {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = item => {
    setCart(prevCart => {
      const quantity = prevCart[item.id]?.quantity || 0;
      return {
        ...prevCart,
        [item.id]: {
          ...item,
          quantity: quantity + 1,
        },
      };
    });
  };

  const removeFromCart = item => {
    setCart(prevCart => {
      const quantity = prevCart[item.id]?.quantity || 0;
      if (quantity > 1) {
        return {
          ...prevCart,
          [item.id]: {
            ...item,
            quantity: quantity - 1,
          },
        };
      } else {
        const newCart = { ...prevCart };
        delete newCart[item.id]; // Remove the item entirely if quantity was 1
        return newCart;
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
