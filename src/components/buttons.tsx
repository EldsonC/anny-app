import React from "react";
import { ButtonStyle } from "../assets/styles/style_components/buttons";

interface ButtonProps {
    title?: string;
    type?: string;
    icon?: React.ReactNode;
    clickAction?: () => void;
}
export function Button({ title, type, clickAction }:ButtonProps) {

    return (
        <ButtonStyle className={type} onClick={clickAction}>
            <p className="headline-regular">{title}</p>
        </ButtonStyle>
    );
}