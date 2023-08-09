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

          const allGoods = [...cart,product];
          storeToDB(product.id);
          setCart(allGoods);
         
 
    }; 
 // Getting DAta form local storage for adding to cart

 
 useEffect(()=>{

     let gettingStoredData = getStoredProducts(products);
     setCart(gettingStoredData);

 },[products]);


    return (
        <div className='shop-container'>
           <div className='products-container'>
               {
                products.map(product => <Product handAddToCart={handAddToCart} key={product.id} product={product}></Product>)
               }
           </div>
           <div className='cart-container'> 
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;