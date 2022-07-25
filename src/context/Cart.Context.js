import React, {createContext, useEffect, useState} from "react";

//find if the cartItem contains products to add
//if found, increment quantity

function addCartItem(cartItems, productToAdd) {
    const currentCartItem = cartItems.find((CartItem) => CartItem.id === productToAdd.id);

    if (currentCartItem) {
        return cartItems.map(
            (cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

function removeCartItem(cartItems, productToRemove) {

    return cartItems.reduce((accum, item) => {
        if (item.id === productToRemove.id) {
            if (item.quantity > 1) {
                accum.push({...item, quantity: item.quantity - 1});
            }
        } else {
            accum.push(item);
        }

        return accum;
    }, [])
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    cartCount: 0,
    removeItemFromCart: () => {},
    total: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    let [total, setTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((accum, item) => accum + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);


    useEffect(() => {
        const subTotal = cartItems.reduce((accum, item) => accum + (item.price * item.quantity), 0)
        setTotal(subTotal);
    },[cartItems]);

    function addItemToCart(product) {
        setCartItems(addCartItem(cartItems, product));
    }

    function removeItemFromCart(product) {
        setCartItems(removeCartItem(cartItems, product));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartCount, removeItemFromCart, total, cartItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}