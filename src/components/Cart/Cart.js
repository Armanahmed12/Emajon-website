import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

       const totalCost = cart.reduce((previousValue, currentValue) =>  previousValue + currentValue.price, 0);
       let shipping = 0;
       for(const product of cart){

           shipping = shipping + product.shipping; 
       };

     const grandTotal = shipping + totalCost + (totalCost / 100) * 7;

       return (
        <div className="cart-info">
            <h4 style={{textAlign:'center',fontSize:'1.3rem'}}>Order Summary</h4>
            <p>Selected Items : ${cart.length}</p>
            <p>Total Price : ${totalCost}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${parseInt((totalCost / 100) * 7)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;