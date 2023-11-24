import { useDispatch, useSelector } from "react-redux";
import { AdsIcon } from "../../assets/icons/headermain/ads";
import { DownIcon } from "../../assets/icons/headermain/down";
import { LayerIcon } from "../../assets/icons/headermain/layer";
import { ProjectIcon } from "../../assets/icons/headermain/project";
import { MenuProject } from "../menu-project";
import { HeaderMainStyle } from "./style";
import { hide, show, stateMenu } from "../../../../redux/features/menu-project";
import { Calendar } from "../calendar/calendar";

export function HeaderMain() {
    const dispatch = useDispatch();
    const stateMenuStatus = useSelector(stateMenu)
    
    const showMenu = () => {
        const down = document.querySelector("#down-p") as HTMLDivElement;

        if (stateMenuStatus) {
            dispatch(hide())
            down.style.transform = "rotate(0deg)"
            down.style.position = "relative"
            down.style.bottom = "0px"
        } else {
            dispatch(show())
            down.style.transform = "rotate(180deg)"
            down.style.position = "relative"
            down.style.bottom = "3px"
        }
    }
    return (
        <HeaderMainStyle>
            <div className="header">
                <ul>
                    <li>
                        <button>
                            <LayerIcon/>
                            <div className="down">
                                <p>My Teams</p>
                                <DownIcon/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button onClick={showMenu}>
                            <ProjectIcon/>
                            <div className="down">
                                <p>Project</p>
                                <div id="down-p">
                                    <DownIcon/>
                                </div>
                            </div>
                        </button>
                        {stateMenuStatus ? <MenuProject/> : null}
                    </li>
                    <li>
                        <button>
                            <AdsIcon/>
                            <p>AnnyAds</p>
                        </button>
                    </li>
                </ul>

                <ul>
                    <li>
                        <button>
                            <div className="down">
                                <p>August 22, 2023 - August 30, 2023</p>
                                <DownIcon/>
                            </div>
                        </button>
                        <Calendar/>
                    </li>
                </ul>
            </div>
        </HeaderMainStyle>
    );
}