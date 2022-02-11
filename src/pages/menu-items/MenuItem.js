import React from "react";
import '../../pages/menu-items/MenuItem.scss';

export default function MenuItem({ title, imageUrl, size }) {
    return (
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }}
            className={`${size} menu-item`}
        >
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Show Now</span>
            </div>
        </div>
    )
}