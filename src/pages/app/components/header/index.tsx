import { ConsIcon } from "../../assets/icons/header/cons";
import { LogoIcon } from "../../assets/icons/header/logo";
import { MenuHIcon } from "../../assets/icons/header/menuh";
import { HeaderStyle } from "./style";

export function Header() {
    return (
        <HeaderStyle>
            <ConsIcon/>
            <div className="header_bar">
                <LogoIcon/>
                <input type="text" placeholder="Search anywere..."/>
            </div>
            <div className="btn_menu">
                <MenuHIcon/>
            </div>
        </HeaderStyle>
    );
}