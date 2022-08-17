import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../context/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";

import './Category.scss';

export default function Category() {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);


    return (
        <div className='container'>
            <h2>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {
                    products && products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>
        </div>

    )
}