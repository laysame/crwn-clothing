import React from "react";
import '../../pages/menu-items/MenuItem.scss';
import {withRouter} from "react-router-dom";

function MenuItem({title, imageUrl, key, size, history, linkUrl, match}) {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }}>
            </div>
            <div className='content'>
                <h1 key={key} className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);