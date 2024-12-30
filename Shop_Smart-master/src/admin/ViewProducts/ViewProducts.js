import React from 'react';
import './ViewProducts.css'

function ViewProducts({ products, deleteProduct, editProduct }) {
    return (
        <div className='admin-view-products'>
            <h3>Here you can see your products</h3>
            <hr />
            <div className="admin-view-product-items">
                {products.map((data) => (
                    <div key={data.id} className="admin-view-product-item">
                        {data.image && (
                            <img src={data.image} alt="Product"  />
                        )}
                        <div className='admin-view-product-data'>
                            <p>{data.id}</p>
                            <p>{data.name}</p>
                            <p>Price:{data.price}</p>
                            {data.category === 'clothes' && (<p>Size: {data.size}</p>)}
                            <p>Quantity:{data.quantity}</p>
                            <p>Category: {data.category}</p>
                            
                            <div className="admin-view-product-actions">
                                <button onClick={() => editProduct(data)}>Edit</button>
                                <button onClick={() => deleteProduct(data.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewProducts;
