// After checking and modifying if it's necessary, I'm tried to store data to local storage.
const storeToDB = (id) =>{
    
   let cart = {};

   let isExisted = JSON.parse(localStorage.getItem("shoppingCart"));
      if(isExisted){

         // It's checking whether is there any property like my Id inside the got object.
         const desiredId = isExisted[id];
         if(desiredId){

              isExisted[id] = desiredId + 1;
              cart = {...isExisted};
         }
         // if we don't get our desired property then we're going to that.
         else{
            cart = {...isExisted};
            cart[id] = 1;
         }
           
      }
      // if we don't get any object from the local storage.
      else{
        
          cart[id] = 1;
      }

      localStorage.setItem('shoppingCart', JSON.stringify(cart));   
};

// To get all products from the localStorage and then returning.
const getStoredProducts = (products) =>{
   
     const givenProducts = products;
     const storedProductsId = JSON.parse(localStorage.getItem('shoppingCart'));
     let selectedProducts = [];

      if(storedProductsId && products.length){

           for(let id in storedProductsId){

                 let matchedProduct = givenProducts.find(product => product.id === id);
                 matchedProduct.quantity = storedProductsId[id];
                 selectedProducts.push(matchedProduct);
           }
       
      };

     return selectedProducts;

   };

// const getShoppingCart = () => {
//     let shoppingCart;

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }


export {storeToDB,getStoredProducts};


// // use local storage to manage cart data
// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }

// const getShoppingCart = () => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb,
//     removeFromDb,
//     getShoppingCart,
//     deleteShoppingCart
// }
