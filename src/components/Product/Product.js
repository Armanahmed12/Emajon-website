import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
 
    const {img,name,price,seller,ratings} = props.product;
    const handAddToCart = props.handAddToCart;

    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-detail'>
             <h4 style={{margin:'0.4rem 0rem 1rem',color:'brown'}}>{name}</h4>
             <p>Price : ${price}</p>
             <p>Manufacture : {seller}</p>
             <p>Rating: {ratings} </p>
            </div>
            <button onClick={()=> handAddToCart(props.product)} className='product-btn'>
                Add to Product <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );

};

export default Product;