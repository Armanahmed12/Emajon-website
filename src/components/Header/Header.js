import React from 'react';
import './Header.css';
import logo from '../../images/favicon.ico';

const Header = () => {
    return (
        <nav className='header'>
            <img style={{height:'13vh'}} src={logo} alt="" />
             <div>
                <li><a href="#oder">Oder</a></li>
                <li><a href="#orderReview">Oder Review</a></li>
                <li><a href="#inventory">Manage Inventory</a></li>
                <li><a href="#login">Login</a></li>
             </div>
        </nav>
    );
};

export default Header;