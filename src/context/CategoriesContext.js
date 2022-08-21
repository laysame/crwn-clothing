import React, {createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from "../firebase/Firebase.Utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect( () => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap().then(r => console.log('Categories Map is done'));
    }, [])

    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}