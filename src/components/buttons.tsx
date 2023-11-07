import React from "react";
import { ButtonStyle } from "../assets/styles/style_components/buttons";

interface ButtonProps {
    title?: string;
    type?: string;
    icon?: React.ReactNode;
    radius?: number;
    clickAction?: () => void;
}
export function Button({ title, type, clickAction, radius }:ButtonProps) {

    return (
        <ButtonStyle className={type} onClick={clickAction} style={{borderRadius: `${radius}px`}}>
            <p className="headline-regular">{title}</p>
        </ButtonStyle>
    );
}