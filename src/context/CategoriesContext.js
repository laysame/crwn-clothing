import React, {createContext, useEffect, useReducer} from "react";
import {getCategoriesAndDocuments} from "../firebase/Firebase.Utils";
import {createAction} from "../reducer/Reducer.utils";

export const CategoriesContext = createContext({
    categories: {},
});

export const CATEGORY_TYPE = {
    SET_CATEGORIES: 'SET_CATEGORIES',
}

const INITIAL_STATE = {
    categories: {},
}

const categoriesMapReducer = (state, action) => {

    const {type, payload} = action;

    switch (type) {
        case CATEGORY_TYPE.SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const CategoriesProvider = ({children}) => {

    const [{categories}, dispatch] = useReducer(categoriesMapReducer, INITIAL_STATE);

    const getCategoriesMap = async () => {
        const categories = await getCategoriesAndDocuments();
        dispatch(createAction(CATEGORY_TYPE.SET_CATEGORIES, categories));
    };

    useEffect(() => {
        getCategoriesMap();
    }, [])

    const value = {categories};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}