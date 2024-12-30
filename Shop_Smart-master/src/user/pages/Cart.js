import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p><span>Rs.</span>{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total Price: <span>Rs.</span>{totalPrice}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
