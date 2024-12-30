import React from 'react';
import { useLocation } from 'react-router-dom';
import UserNavbar from "./components/UserNavbar/UserNavbar.js";
import AdminNavbar from '../admin/AdminNavbar/AdminNavbar.js';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin');
    


    return (
        <>
            {isAdminPage ? <AdminNavbar /> : <UserNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
            
        </>
    );
};

export default Navbar;
