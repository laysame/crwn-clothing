import React, {createContext, useReducer} from "react";
import {createAction} from "../reducer/Reducer.utils";

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL'
}

function addCartItem(cartItems, productToAdd) {
    //find if the cartItem contains products to add
    //if found, increment quantity
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

function deleteItemFromCheckout(cartItems, productToRemove) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    cartCount: 0,
    removeItemFromCart: () => {
    },
    cartTotal: 0,
    removeItemFromCheckout: () => {
    }
});

const INITIAL_STATE = {
    currentUser: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    console.log(action);
    const {type, payload} = action;

    switch (type) {
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            }
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const CartProvider = ({children}) => {

    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const setIsCartOpen = (booleanValue) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, booleanValue));
    }

    const updateCartItemsReducer = (newCartItems) => {
        //1. generate the newCartTotal;
        const newTotal = newCartItems.reduce((accum, item) => accum + (item.price * item.quantity), 0)
        //2. generate the newCartCount;
        const newCartCount = newCartItems.reduce((accum, item) => accum + item.quantity, 0);
        // 3. dispatch new action with payload = {newCartItems, newCartTotal, newCartTotal}
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,
            {cartItems: newCartItems, cartTotal: newTotal, cartCount: newCartCount}
        ));
    }

    function addItemToCart(product) {
        const newCartItems = addCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    function removeItemFromCart(product) {
        const newCartItems = removeCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    function removeItemFromCheckout(productToRemove) {
        const newCartItems = deleteItemFromCheckout(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const value = {
        isCartOpen,
        cartCount,
        cartTotal,
        cartItems,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        removeItemFromCheckout,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}