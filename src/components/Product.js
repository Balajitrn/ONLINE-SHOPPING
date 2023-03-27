import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Product.css';

const Product = ({ product }) => {
  const { name, description, image, price, availability } = product;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [showQuantityInput, setShowQuantityInput] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!showQuantityInput) {
      setShowQuantityInput(true);
    } else {
      console.log('Adding product to cart:', product);
      addToCart(product, parseInt(quantity));
      setAddedToCart(true);
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
      setShowQuantityInput(false); // Reset the state after adding the product to the cart
    }
  };

  return (
    <div className="parent-class">
      <div className="product">
        <img src={image} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-availability">Availability: {availability}</p>
        {showQuantityInput && (
           <div className="quantity-input-container">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="quantity-input"
          />
          <button
          onClick={() => setShowQuantityInput(false)}
          className="cancel-button"
        >
          Cancel
        </button>
        </div>
        )}
        <button onClick={handleAddToCart} className="add-to-cart">
          {showQuantityInput ? 'Cofirm and add' : 'Add to Cart'}
        </button>
        {addedToCart && <p className="added-to-cart-message">Item added to cart!</p>}
      </div>
    </div>
  );
};

export default Product;
