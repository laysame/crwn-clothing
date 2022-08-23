import React from "react";
import {FormInputLabel, GroupContainer, Input} from "./FormInput-Styles";

export default function FormInput({handleChange, label, ...otherProps}) {
    return (
        <GroupContainer>
            <Input onChange={handleChange} {...otherProps}/>
            {label && (
                    <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </GroupContainer>
    )
}