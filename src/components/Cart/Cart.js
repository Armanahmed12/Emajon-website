import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
   
      
       let shipping = 0;
       let totalProducts = 0;
       let price = 0;
       

        for(const product of cart){

            shipping = shipping + (product.shipping * product.quantity);
            totalProducts = totalProducts + product.quantity;
            price = price + (product.price * product.quantity);

        };



     const grandTotal = shipping + price + (price / 100) * 7;

       return (
        <div className="cart-info">
            <h4 style={{textAlign:'center',fontSize:'1.3rem'}}>Order Summary</h4>
            <p>Selected Items : ${totalProducts}</p>
            <p>Total Price : ${price}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${parseInt((price / 100) * 7)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;