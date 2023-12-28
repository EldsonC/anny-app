import { useDispatch, useSelector } from "react-redux";
import { AdsIcon } from "../../assets/icons/headermain/ads";
import { DownIcon } from "../../assets/icons/headermain/down";
import { LayerIcon } from "../../assets/icons/headermain/layer";
import { ProjectIcon } from "../../assets/icons/headermain/project";
import { MenuProject } from "../menu-project";
import { HeaderMainStyle } from "./style";
import { hide, show, stateMenu } from "../../../../redux/features/menu-project";
import { Calendar } from "../calendar/calendar";
import { stateMenuTeams, show as showTeams, hide as hideTeams } from "../../../../redux/features/menu-teams";
import { MenuTeams } from "../menu-teams";
import { show as showRightBar } from "../../../../redux/features/rightbar";
import { show as showQr } from "../../../../redux/features/qrcode";
import { NoteIcon } from "../../assets/icons/rightbar/note";

export function HeaderMain() {
    const dispatch = useDispatch();
    const stateMenuStatus = useSelector(stateMenu);
    const stateTeamsMenu = useSelector(stateMenuTeams);

    const showBar = () => {
        dispatch(showRightBar())
    }

    const showQrcode = () => {
        dispatch(showQr())
    }
    
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

    const showMenuTeams = () => {
        const down = document.querySelector("#down-p1") as HTMLDivElement;

        if (stateTeamsMenu) {
            dispatch(hideTeams())
            down.style.transform = "rotate(0deg)"
            down.style.position = "relative"
            down.style.bottom = "0px"
        } else {
            dispatch(showTeams())
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
                        <button onClick={showMenuTeams}>
                            <LayerIcon/>
                            <div className="down">
                                <p>My Teams</p>
                                <div id="down-p1">
                                    <DownIcon/>
                                </div>
                            </div>
                        </button>
                        {stateTeamsMenu ? <MenuTeams/> : null}
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
                    <li>
                        <button onClick={showQrcode}>
                            <div title="Company" className="down rightbar">
                                <NoteIcon/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button onClick={showBar}>
                            <div title="Company" className="down rightbar">
                                <DownIcon/>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </HeaderMainStyle>
    );
}