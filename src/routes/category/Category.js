import React, { useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import './Category.scss';
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/category/categoty-selector";

const Category = () => {

    const {category} = useParams();
    const categories = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categories[category]);

    useEffect(() => {
        setProducts(categories[category]);
    }, [category, categories]);

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
};

export default Category;
