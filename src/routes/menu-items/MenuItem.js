import React from "react";
import './menu-item-styles';
import {withRouter} from "react-router-dom";
import {BackgroundImage, BodyContent, DirectoryItem} from "./menu-item-styles";

const MenuItem = ({category, history}) => {

    const {title, imageUrl, linkUrl} = category;

    return (
        <DirectoryItem onClick={() => history.push(linkUrl)}>
            <BackgroundImage imageUrl={imageUrl}/>
            <BodyContent>
                <h2>{title}</h2>
                <span>SHOP NOW</span>
            </BodyContent>
        </DirectoryItem>
    )
}

export default withRouter(MenuItem);