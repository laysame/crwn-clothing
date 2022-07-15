import React, {createContext, useState} from "react";
import PRODUCTS from "../../src/shop/ShopData.json";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvide = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS)
    const value = {products};
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}