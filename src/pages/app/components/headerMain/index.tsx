import { useDispatch, useSelector } from "react-redux";
import { AdsIcon } from "../../assets/icons/headermain/ads";
import { DownIcon } from "../../assets/icons/headermain/down";
import { LayerIcon } from "../../assets/icons/headermain/layer";
import { HeaderMainStyle } from "./style";
import { stateMenuTeams, show as showTeams, hide as hideTeams } from "../../../../redux/features/menu-teams";
import { MenuTeams } from "../menu-teams";
import { show as showRightBar } from "../../../../redux/features/rightbar";
import { show as showQr } from "../../../../redux/features/qrcode";
import { show as showCalendar } from "../../../../redux/features/calendar";
import { NoteIcon } from "../../assets/icons/rightbar/note";
import { stateEmployee } from "../../../../redux/features/addEmployee";
import { EmployeeModalAdd } from "../addModalApp";

export function HeaderMain() {
    const dispatch = useDispatch();
    const stateTeamsMenu = useSelector(stateMenuTeams);
    const employeeModalState = useSelector(stateEmployee);


    const showBar = () => {
        dispatch(showRightBar())
    }

    const showQrcode = () => {
        dispatch(showQr())
    }

    const showCalendarModal = () => {
        dispatch(showCalendar())
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
        <>
            {employeeModalState ? <EmployeeModalAdd /> : null}
            <HeaderMainStyle>

                <div className="header">
                    <ul>
                        <li>
                            <button onClick={showMenuTeams}>
                                <LayerIcon />
                                <div className="down">
                                    <p>My Teams</p>
                                    <div id="down-p1">
                                        <DownIcon />
                                    </div>
                                </div>
                            </button>
                            {stateTeamsMenu ? <MenuTeams /> : null}
                        </li>
                        <li>
                            <button>
                                <AdsIcon />
                                <p>AnnyAds</p>
                            </button>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <button onClick={showCalendarModal}>
                                <div className="down">
                                    <p>August 22, 2023 - August 30, 2023</p>
                                    <DownIcon />
                                </div>
                            </button>

                        </li>
                        <li>
                            <button onClick={showQrcode}>
                                <div title="Company" className="down rightbar">
                                    <NoteIcon />
                                </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={showBar}>
                                <div title="Company" className="down rightbar">
                                    <DownIcon />
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </HeaderMainStyle>
        </>
    );
}