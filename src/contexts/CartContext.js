import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => (item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + quantity } : item)));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...existingProduct, quantity: existingProduct.quantity - 1 } : item)));
    }
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart(cart.map((item) => (item.id === productId ? { ...item, quantity } : item)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
