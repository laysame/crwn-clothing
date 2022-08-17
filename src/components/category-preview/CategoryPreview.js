import React from "react";
import './CategoryPreview.scss';
import ProductCard from "../product-card/ProductCard";

export default function CategoryPreview({title, products}) {

    function handleClick() {
    alert('test')
    }

    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title' onClick={handleClick}>{title.toUpperCase()}</span>
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