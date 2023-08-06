import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{

        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
          
    },[]);
  
    const [cart, setCart] = useState([]);
    const handAddToCart = (product) => {

         const newCart = [...cart,product];
          setCart(newCart);
 
    };

    console.log(cart);

    return (
        <div className='shop-container'>
           <div className='products-container'>
               {
                products.map(product => <Product handAddToCart={handAddToCart} key={product.id} product={product}></Product>)
               }
           </div>
           <div className='cart-container'> 
              <h2>Products Summary</h2>
              <h1>Added product length: {cart.length}</h1>

           </div>
        </div>
    );
};

export default Shop;