import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logo from '../../../Assets/logo.png';
import cart_icon from '../../../Assets/cart_icon.png';
import './UserNavbar.css';

const UserNavbar = ({ isLoggedIn, setIsLoggedIn }) => {

    const [ userProfileOpen, setUserProfileOpen ] = useState(false);

    const handleProfile = () => {
        setUserProfileOpen(!userProfileOpen)
    }

    const handleLogout = () => {
        setIsLoggedIn(false); // Example logout functionality
        setUserProfileOpen(false); // Close userProfile box on logout
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOP SMART</p>
            </div>

            <ul className='nav-menu'>
                <li ><Link to='/'>Home</Link></li>
                <li ><Link to='/groceries'>Groceries</Link></li>
                <li ><Link to='/clothes'>Clothes</Link></li>
                <li ><Link to='/accessories'>Accessories</Link></li>
            </ul>

            <div className='nav-login-cart'>
                {isLoggedIn ? null : <button><Link to='/login'>Login</Link></button>}
                
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
                <span className='user-icon' ><FaUser onClick={handleProfile}/></span>
                {userProfileOpen && isLoggedIn &&
                <div className='userProfile'>
                    <p>User</p>
                    <p onClick={handleLogout}>Logout</p>
                </div> }
            </div>
        </div>
    );
};

export default UserNavbar;
