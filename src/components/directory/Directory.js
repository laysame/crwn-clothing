import React from "react";
import MenuItem from '../../routes/menu-items/MenuItem';
import {DirectoryContainer} from "./Directory-Styles";


export default function Directory({categories}) {

    return (
        <DirectoryContainer>
            {
                categories.map((category) => (
                    <MenuItem key={category.id} category={category}/>
                ))
            }
        </DirectoryContainer>
    )
}
