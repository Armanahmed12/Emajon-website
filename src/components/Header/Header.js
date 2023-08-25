import React from 'react';
import './Header.css';
import logo from '../../images/favicon.ico';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img style={{height:'13vh'}} src={logo} alt="" />
             <div>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/login">Login</Link></li>
             </div>
        </nav>
    );
};

export default Header;