import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'


const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      
      <ul className='admin-nav-menu'>
        <li><Link to="/adminHome">Home</Link></li>
        <li><Link to="/adminAddProducts">Add Products</Link></li>
        <li><Link to="/adminViewProducts">View Products</Link></li>
        <li><Link to="/adminLogout">Log Out</Link></li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
