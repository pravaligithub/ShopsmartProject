import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Function to perform logout logic
const performLogout = () => {
    // Clear any stored tokens or user information from local storage or cookies
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Optionally, you can also make an API call to the server to invalidate the session
    // await fetch('/api/logout', { method: 'POST' });
};

function AdminLogout() {
    const navigate = useNavigate();

    // useEffect to handle logout when component mounts
    useEffect(() => {
        // Perform the logout logic
        performLogout();

        // Redirect to login page
        navigate('/');
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
}

export default AdminLogout;
