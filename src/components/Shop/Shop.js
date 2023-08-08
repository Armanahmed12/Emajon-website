import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { getStoredProducts, storeToCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
          
    },[]);

// Giving data to the cart component
   
    let [goods, setGoods] = useState([]);
     
    const handAddToCart = (product) => {

          const allGoods = [...goods,product];
          storeToCart(product.id);
          setGoods(allGoods);
         
 
    };

    let storedData = getStoredProducts(products);
    let cart = [...storedData];
    

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