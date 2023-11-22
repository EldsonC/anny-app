import { CommandIcon } from "../../assets/icons/float/command";
import { MenuIcon } from "../../assets/icons/float/menu";
import { SearchIcon } from "../../assets/icons/float/search";
import { GetPro } from "../getpro";
import { MenuFloatStyle } from "./style";


export function MenuFloat() {
    return (
        <MenuFloatStyle >
            <header>
                <div className="left_float">
                    <div className="img_float">
                        
                    </div>
                    <div className="left_data">
                        <h3>IVY Softwares</h3>
                        <p>ivysoftwares@gmail.com</p>
                    </div>
                </div>
                <div className="right">
                    <MenuIcon/>
                </div>
            </header>
            <div className="search_container">
                <div className="search">
                    <div className="input">
                        <SearchIcon/>
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div className="tip_search">
                        <CommandIcon/>
                        <p>F</p>
                    </div>
                </div>
            </div>
            <div className="pro">
                <GetPro/>
            </div>
        </MenuFloatStyle>
    );
}