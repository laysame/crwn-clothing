import React, {useContext} from 'react';
import {ProductsContext} from '../context/Products.Context';
import ProductCard from "../components/product-card/ProductCard";

import './ShopPage.scss';

export default function ShopPage() {

    const {products} = useContext(ProductsContext);

    return <div className='products-container'>
        {
            products.map((product) => <ProductCard key={product.id} product={product} />)
        }
    </div>
}
