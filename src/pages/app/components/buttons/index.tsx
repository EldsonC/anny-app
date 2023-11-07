import { ButtonStyle } from "./style";

interface ButtonProps {
    type?: string;
    title: string;
    icon?: React.ReactNode;
}

export function Button({ type, title, icon }:ButtonProps) {

    const renderIcon = () => {
        if (icon) {
            return icon
        } else {
            return
        }
    }
    return (
        <ButtonStyle className={type}>
            {renderIcon()}
            <p>{title}</p>
        </ButtonStyle>
    );
}