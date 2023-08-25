import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart, children }) => {
  let shipping = 0;
  let totalProducts = 0;
  let price = 0;

  for (const product of cart) {
    shipping = shipping + product.shipping * product.quantity;
    totalProducts = totalProducts + product.quantity;
    price = price + product.price * product.quantity;
  }

  const grandTotal = shipping + price + (price / 100) * 7;

  return (
    <div style={{ lineHeight: "33px" }}>
      <h4 style={{ textAlign: "center", fontSize: "1.3rem" }}>Order Summary</h4>
      <p className="mt-3">Selected Items : ${totalProducts}</p>
      <p>Total Price : ${price}</p>
      <p>Total Shipping : ${shipping}</p>
      <p>Tax : ${parseInt((price / 100) * 7)}</p>
      <p>Grand Total : ${grandTotal.toFixed(2)}</p>
      <button
        onClick={clearCart}
        className="border-2 rounded border-solid border-white bg-black flex w-full justify-between p-1 px-2 mt-6 items-center"
      >
        <span className="">Clear Cart</span>
        <FontAwesomeIcon
          className="text-1xl text-red-600 bg-white p-2 rounded-full"
          icon={faTrashAlt}
        />
      </button>
      {children}
    </div>
  );
};

export default Cart;
