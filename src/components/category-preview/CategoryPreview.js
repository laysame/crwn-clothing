import React from "react";
import './CategoryPreview.scss';
import ProductCard from "../product-card/ProductCard";
import {useHistory} from "react-router-dom";


export default function CategoryPreview({title, products}) {

    const history = useHistory();
    const routeChange = () => {
        const path = `/shop/${title}`;
        history.push(path);

        console.log(path)
    }

    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title' onClick={routeChange}>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx < 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                }
            </div>
        </div>
    )
}