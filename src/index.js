import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './index.css';
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './Loaders/cartProductsLoad';
import Checkout from './components/Checkout/Checkout';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    errorElement : <h2>Error</h2>,
    children : [

      {

          path : "/",
          element : <Shop></Shop>
      },

      {

          path : '/orders',
          element : <Orders></Orders>,
          loader : cartProductsLoader,

         
      },

      {

          path : "inventory",
          element : <Inventory></Inventory>
      },

      {

          path : "login",
          element : <Login></Login>
      },
      
      {

          path: '/checkout',
          element: <Checkout></Checkout>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

