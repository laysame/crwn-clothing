import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import Category from "../routes/category/Category";
import CategoriesPreview from "../routes/categories-preview/CategoriesPreview";
import {getCategoriesAndDocuments} from "../utils/firebase/firabase-utils";
import {useDispatch} from "react-redux";
import {setCategoriesMap} from "../store/category/category-actions";

const ShopPagesRoutes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
           dispatch(setCategoriesMap(categoryMap));
        };

        getCategoriesMap();
    },);


    return (
        <div>
            <Switch>
                <Route exact path='/shop' component={CategoriesPreview}/>
                <Route path='/shop/:category' component={Category}/>
            </Switch>
        </div>
    )
};

export default ShopPagesRoutes;

