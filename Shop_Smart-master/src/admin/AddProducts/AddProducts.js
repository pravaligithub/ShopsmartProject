import React, { useState } from 'react';
import './AddProducts.css'

const AddProduct = ({ addProduct }) => {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        size: '',
        image: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({
            name: '',
            category: '',
            price: '',
            size: '',
            quantity: '',
            image: ''
        });
    };

    return (
        <div className='admin-add-product'>
        <div className="add-product">
            <h2 className='add-product-heading'>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='add-product-label'>Name:</label><br />
                    <input className='add-product-input' type="text" name="name" value={product.name} onChange={handleChange} required />
                </div>
                <div>
                    <label className='add-product-label'>Category:</label><br />
                    <select className='add-product-input' name="category" value={product.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="groceries">Groceries</option>
                        <option value="clothes">Clothes</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>
                {product.category === 'clothes' && (
                    <div>
                        <label className='add-product-label'>Size:</label><br />
                        <select className='add-product-input' name="size" value={product.size} onChange={handleChange} required>
                            <option value="">Select size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value='XL'>XL</option>
                        </select>
                    </div>
                )}

                <div>
                    <label className='add-product-label'>Quantity</label><br />
                    <input className='add-product-input' type='number' name='quantity' value={product.quantity} onChange={handleChange} required />
                </div>
                <div>
                    <label className='add-product-label'>Price:</label><br />
                    <input className='add-product-input' type="number" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div>
                    <label className='add-product-label'>Image:</label><br />
                    <input className='add-product-input' type="text" name="image" value={product.image} onChange={handleChange} required />
                </div>
                <button className='add-product-btn' type="submit">Add Product</button>
            </form>
        </div>
        </div>
    );
};

export default AddProduct;
