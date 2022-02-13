import React from "react";
import '../../pages/menu-items/MenuItem.scss';

export default function MenuItem({ title, imageUrl, key, size }) {
    return (
        <div className={`${size} menu-item`}>

            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <div className='content'>
                <h1 key ={key} className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}