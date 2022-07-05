import React, {useState} from "react";
import SHOP_DATA from "./ShopData";
import CollectionPreview from "../components/collection-preview/CollectionPreview";

export default function ShopPage() {

    const [collection] = useState(SHOP_DATA);

    return (
        <div className='shop-page'>
            {
                collection.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>

    )
}
