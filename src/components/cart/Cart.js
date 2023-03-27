import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateCartQuantity = (productId, event) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      updateCartQuantity(productId, quantity);
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <span>{item.name}</span>
              <span>Price: ${item.price.toFixed(2)}</span>
              <span>
                Quantity: <input type="number" min="1" value={item.quantity} onChange={(event) => handleUpdateCartQuantity(item.id, event)} />
              </span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <p>Total Price: ${totalPrice.toFixed(2)}</p>}
    </div>
  );
};

export default Cart;
