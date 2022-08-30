import React from 'react';
import {Route, Switch} from "react-router-dom";
import Category from "../routes/category/Category";
import CategoriesPreview from "../routes/categories-preview/CategoriesPreview";

const ShopPagesRoutes = () => {

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

