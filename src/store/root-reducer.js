import {combineReducers} from "redux";
import {userReducer} from "./user/user-reducer";
import {cartReducer} from "./cart/cart-reducer";
import {categoriesReducer} from "./category/category-reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    category: categoriesReducer,
})