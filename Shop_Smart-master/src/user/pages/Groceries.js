import React, { useContext } from 'react';
import './Groceries.css'; // Ensure this path is correct
import { CartContext } from './CartContext'; // Ensure this path is correct

const Groceries = ({ products }) => {
  // Access the addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // Filter products to get only groceries
  const groceriesProducts = products.filter(product => product.category === 'groceries');

  return (
    <div className="groceries-page">
      <h1>Groceries</h1>
      <div className="products-list">
        {groceriesProducts.map(product => (
          <div key={product.id} className="product-item">
            {product.image && <img src={product.image} alt={product.name} />}
            <h3>{product.name}</h3>
            <p><strong>Price:</strong><span>Rs.</span> {product.price}</p>
            
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groceries;
