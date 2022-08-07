import React, {createContext, useState} from "react";
import SHOP_DATA from "../shop/ShopData.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvide = ({children}) => {
    const [products] = useState([])
    const value = {products};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}