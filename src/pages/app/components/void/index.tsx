import { Button } from "../../../../components/buttons";
import { VoidStyle } from "./style";

interface VoidProps{
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    titleButtonOne?: string;
    titleButtonTwo?: string;
    iconButton?: React.ReactNode;
    actionButton?: () => void;
}

export function Void({icon, title, description, titleButtonOne, titleButtonTwo, iconButton, actionButton}:VoidProps) {
    return (
        <VoidStyle>
            {icon}
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <div className="btns">
                <Button
                    clickAction={actionButton}
                    title={titleButtonOne}
                />
                <Button
                    type="void-button"
                    icon={iconButton}
                    title={titleButtonTwo}
                />
            </div>
        </VoidStyle>
    );
}