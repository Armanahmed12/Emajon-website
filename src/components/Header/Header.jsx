import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/favicon.ico';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    
    const {user,logOutTheCurrentUser} = useContext(AuthContext);
    const logOutUser = () =>{

         logOutTheCurrentUser()
        .then( ()=> alert("User has been logged out successfully"))
        .then(error =>console.log(error));
    }
    console.log(user);

    return (
        <nav className='header'>
            <img style={{height:'50px'}} src={logo} alt="" />
             <div>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signUp">Sign Up</Link></li>
                 {user && <button onClick={logOutUser} className='ml-3 text-red-500 font-bold hover:text-blue-500'>Log Out</button>}
             </div>
        </nav>
    );
};

export default Header;