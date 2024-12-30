import React from 'react';
import './AdminHome.css'
import logo_big from '../../Assets/logo_big.png'


const Home = () => {
    return (
        <>
            <div className="admin-home">
            <div className='img-logo'>
                <img className='logo-big' src={logo_big} alt="" />
            </div>
            <div className='home-content'>
                <h1>Hey, Admin!</h1>
                <h2>Shop Smart Welcomes you...</h2>
            </div>
            
            </div>

            <p className='slogan'>"Your Products, Our Platform, Unlimited Potential!"</p>
            <div className='category-imgs'>
                <img className='category-img' src='https://t3.ftcdn.net/jpg/02/84/47/42/360_F_284474211_iZHnpYKnBXfyy6c8mBqcbrRYzIz7hHRF.jpg' alt='gorceries' />
                <img className='category-img' src='https://st.depositphotos.com/1085342/1888/i/450/depositphotos_18885485-stock-photo-nothing-to-wear-concept-young.jpg' alt='clothes' />
                <img className='category-img' src='https://www.thestatesman.com/wp-content/uploads/2017/12/accessories.jpg' alt='accessories' />
            </div>
        </>
    );
};

export default Home;
