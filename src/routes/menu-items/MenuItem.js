import React from "react";
import './MenuItem-Styles';
import {withRouter} from "react-router-dom";
import {BackgroundImage, BodyContent, DirectoryItem} from "./MenuItem-Styles";

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