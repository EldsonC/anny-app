import { Button } from "../../../../components/buttons";
import { GetProStyle } from "./style";

export function GetPro() {
    return (
        <GetProStyle>
            <div className="text_pro">
                <h4>UPGRADE TO <span>PRO</span></h4>
                <p>Desbloqueie recursos avançados e benefícios exclusivos.</p>
            </div>
            <div className="button_container">
                <Button
                    title="Get Pro +"
                    radius={4}
                />
                <Button
                    type="void-button"
                    title="Try Pro"
                    radius={4}
                />
            </div>
        </GetProStyle>
    );
}