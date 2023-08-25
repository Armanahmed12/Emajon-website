import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { getStoredProducts, storeToDB } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
          
    },[]);

// Giving data to the cart component
   
    let [cart, setCart] = useState([]);


 const handAddToCart = (product) => {
 
    storeToDB(product.id);
    const cartProducts = getStoredProducts(products);
    setCart(cartProducts);
   
}; 

//  Getting DAta form local storage for adding to cart
useEffect(()=>{

    let cartProducts = getStoredProducts(products);
    setCart(cartProducts);

},[products]);

// clear all products from the cart.
 function clearCart(){
    
    setCart([]);
    localStorage.removeItem('shoppingCart');
        
 }
    return (
        <div className='shop-container'>
           <div className='products-container'>
               {
                products.map(product => <Product handAddToCart={handAddToCart} key={product.id} product={product}></Product>)
               }
           </div>
           <div className='cart-container'> 
               <Cart cart={cart} clearCart={clearCart}></Cart>
           </div>
        </div>
    );
};

export default Shop;