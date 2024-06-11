import React, { createContext, useState } from "react";

export const CreateContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [cartitems] = useState({
    carditem: {
      Product_img: "product_image_url",
      procuct_catogory: "product_category",
      Product_name: "Product Name",
      Product_price_del: "$100",
      Product_price: "$80",
    },
  });

  return (
    <CreateContext.Provider value={{ cart, setCart, cartitems }}>
      {children}
    </CreateContext.Provider>
  );
};

export default CartContextProvider;
