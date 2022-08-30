import React, {Fragment, useContext} from 'react';
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import {CategoriesContext} from "../../context/categories-context";


const CategoriesPreview = () => {

    const {categories} = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categories).map((title) => {
                const products = categories[title];
                return (
                    <CategoryPreview key={title} title={title} products={products}/>
                )
            })}
        </Fragment>
    );
};

export default CategoriesPreview;