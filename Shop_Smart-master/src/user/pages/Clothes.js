import React, { useContext } from 'react';
import './Clothes.css';
import { CartContext } from './CartContext';

const Clothes = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  const clothesProducts = products.filter(product => product.category === 'clothes');

  return (
    <div className="clothes-page">
      <h1>Clothes</h1>
      <div className="products-list">
        {clothesProducts.map(product => (
          <div key={product.id} className="product-item">
            {product.image && <img src={product.image} alt="Product" />}
            <h3>{product.name}</h3>
            <p><strong>Price:<span>Rs.</span></strong> {product.price}</p>
            <p><strong>Size:</strong> {product.size}</p>
            
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;