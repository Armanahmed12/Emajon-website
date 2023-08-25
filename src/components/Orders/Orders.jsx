import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { getStoredProducts } from "../../utilities/fakedb";
import { Link, useLoaderData } from "react-router-dom";
import ProductReview from "../ProductReview/ProductReview";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
  let [cartProducts, setCartProducts] = useState([]);
  const products = useLoaderData();
  useEffect(() => {
    let selectedProducts = getStoredProducts(products);
    setCartProducts(selectedProducts);
  }, [products]);
  
  // Delete selected Item after getting them from localStorage through clicking on the trashIcon.
  let deleteSelectedItem = (id) => {
    let allSelectedProductsId = JSON.parse(
      localStorage.getItem("shoppingCart")
    );
    delete allSelectedProductsId[id];
    localStorage.setItem("shoppingCart", JSON.stringify(allSelectedProductsId));
    let selectedProducts = getStoredProducts(products);
    setCartProducts(selectedProducts);
  };
  // clear all products from the cart.
  function clearCart() {
    setCartProducts([]);
    localStorage.removeItem("shoppingCart");
  }

  return (
    <div className="justify-evenly my-12 flex">
      <div>
        {cartProducts.map((product) => (
          <ProductReview
            deleteSelectedItem={deleteSelectedItem}
            key={product.id}
            product={product}
          ></ProductReview>
        ))}
      </div>

      <div style={{ width: "30%" }} className="cart-container">
        <Cart cart={cartProducts} clearCart={clearCart}>
         
     <span className="border-2 rounded border-solid border-white bg-green-500 flex w-full justify-between p-1 px-2 mt-2 items-center">
      Proceed checkout
       <Link to={'/checkout'}>
         <button>
          <FontAwesomeIcon icon={faMoneyBill}/>
         </button>
       </Link>
     </span>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
