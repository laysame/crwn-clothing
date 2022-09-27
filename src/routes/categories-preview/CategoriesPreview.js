import React, {Fragment} from 'react';
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/category/categoty-selector";


const CategoriesPreview = () => {

    const categories = useSelector(selectCategoriesMap);

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