import { useState } from "react";
import { SwitchStyle } from "./style";

export function Switch() {
    const [ isChecked, setIsChecked ] = useState(false)

    const toggleSwitch = () => {
        setIsChecked((prev) => !prev);
    }

    return (
        <SwitchStyle>
            <input 
                id="mysSwitch" 
                type="checkbox"
                checked={isChecked}
                onChange={toggleSwitch}/>
            <span className="slider"></span>
        </SwitchStyle>
    );
}