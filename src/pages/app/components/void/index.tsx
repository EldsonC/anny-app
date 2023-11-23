import { Button } from "../../../../components/buttons";
import { VoidStyle } from "./style";

interface VoidProps{
    icon: React.ReactNode;
    title: string;
    description: string;
}
export function Void({icon, title, description}:VoidProps) {
    return (
        <VoidStyle>
            {icon}
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <div className="btns">
                <Button
                    title="Create"
                />
                <Button
                    type="void-button"
                    title="Add"
                />
            </div>
        </VoidStyle>
    );
}