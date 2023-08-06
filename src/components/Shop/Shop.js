import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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