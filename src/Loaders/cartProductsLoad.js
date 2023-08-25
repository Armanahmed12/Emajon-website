const allProducts = async () => {

      const response = await fetch('fakeData/products.json');
      const products = await response.json();
      return products;
      
};

export default allProducts;