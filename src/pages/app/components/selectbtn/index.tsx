import { TrillBtnStyle } from "./style";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

interface ButtonTrillProps {
    buttons: ButtonProps[];
}
export function TrillBtn({buttons}:ButtonTrillProps) {
    return (
        <TrillBtnStyle>
            {buttons.map((button, index) => {
                return (
                    <button key={index} onClick={button.onClick}>
                        {button.label}
                    </button>
                );
            })}
        </TrillBtnStyle>
    );
}