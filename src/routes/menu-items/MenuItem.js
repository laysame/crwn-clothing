import React from "react";
import './MenuItem-Styles';
import {withRouter} from "react-router-dom";
import {BackgroundImage, BodyContent, DirectoryItem} from "./MenuItem-Styles";

function MenuItem({category, history}) {

    const {title, imageUrl} = category;

    return (
        <DirectoryItem onClick={() => history.push(`shop/${title}`)}>
            <BackgroundImage imageUrl={imageUrl}/>
            <BodyContent>
                <h2>{title}</h2>
                <span>SHOP NOW</span>
            </BodyContent>
        </DirectoryItem>
    )
}

export default withRouter(MenuItem);