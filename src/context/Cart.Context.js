import React, {createContext, useState} from "react";

//find if the cartItem contains products to add
//if found, increment quantity

function addCartItem(cartItems, productToAdd) {
    console.log(cartItems, productToAdd);
    const currentCartItem = cartItems.find((CartItem) => CartItem.id === productToAdd.id);

    if (currentCartItem) {
        return cartItems.map(
            (cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);

    function addItemToCart(product) {
        setCartItems(addCartItem(cartItems, product));
    }


    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}