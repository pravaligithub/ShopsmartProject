import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './user/Navbar';
import { deleteData, getData, putData, postData } from './admin/api.js';
import Form from "./admin/Form.js"

import Home from './user/pages/Home';
import Groceries from './user/pages/Groceries';
import Clothes from './user/pages/Clothes';
import Accessories from './user/pages/Accessories';
//import Wishlist from './user/pages/Wishlist';
import Cart from './user/pages/Cart';
import LoginSignup from './user/pages/LoginSignup/LoginSignup';
//import User from './user/pages/User';

import AdminHome from './admin/AdminHome/AdminHome.js';
import AddProducts from './admin/AddProducts/AddProducts.js';
import ViewProducts from './admin/ViewProducts/ViewProducts.js';
import AdminLogout from './admin/AdminLogout/AdminLogout.js';
//import AdminEditProduct from './admin/AdminEditProduct/AdminEditProduct.js';

import { CartProvider } from './user/pages/CartContext.js';

function App() {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [initialForm, setInitialForm] = useState({ name: '', price: '', category: '', size: '', image: '', quantity: '' });
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const response = await getData();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  async function addProduct(product) {
    try {
      let data = {
        name: product.name,
        price: product.price,
        category: product.category,
        quantity: product.quantity,
        size: product.size,
        image: product.image
      };
      if (edit) {
        await putData(product.id, data);
      } else {
        await postData(data);
      }
      getAllProducts();
      setOpenForm(false);
    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  }

  async function deleteProduct(id) {
    try {
      await deleteData(id);
      getAllProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  function editProduct(value) {
    setEdit(true);
    setOpenForm(true);
    setInitialForm({
      id: value.id,
      name: value.name,
      price: value.price,
      category: value.category,
      quantity: value.quantity,
      size: value.size || '',
      image: value.image || ''
    });
  }

  function closeForm() {
    setOpenForm(false);
  }

  function showForm() {
    setInitialForm({
      name: '',
      price: '',
      category: '',
      quantity: '',
      size: '',
      image: ''
    });
    setOpenForm(true);
    setEdit(false);
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          <Route path="/groceries" element={<Groceries products={products} />} />
          <Route path="/clothes" element={<Clothes products={products} />} />
          <Route path="/accessories" element={<Accessories products={products} />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          
        </Routes>
        {/* Admin routes */}
        <main className='content'>
          <Routes>
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/adminAddProducts" element={<AddProducts addProduct={addProduct} />} />
            <Route
              path="/adminViewProducts"
              element={<ViewProducts products={products} showForm={showForm} editProduct={editProduct} deleteProduct={deleteProduct} />}
            />
            
            <Route path="/adminLogout" element={<AdminLogout />} />
          </Routes>
        </main>
        {openForm && <Form addProduct={addProduct} data={initialForm} closeForm={closeForm} />}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;