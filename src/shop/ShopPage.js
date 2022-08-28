import React from 'react';
import './ShopPage.scss';
import {Route, Switch} from "react-router-dom";
import Category from "../routes/category/Category";
import CategoriesPreview from "../routes/categories-preview/CategoriesPreview";

const ShopPage = () => {

    return (
        <div>
            <Switch>
                <Route exact path='/shop' component={CategoriesPreview}/>
                <Route path='/shop/:category' component={Category}/>
            </Switch>
        </div>
    )
};

export default ShopPage;

