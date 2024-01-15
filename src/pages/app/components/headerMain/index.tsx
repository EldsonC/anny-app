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
import { FilterIcon } from "../../assets/icons/content/filter";
import { ChatIcon } from "../../assets/icons/content/chat";
import { SearchIcon } from "../../assets/icons/sidebar/search";
import { ProjectIcon } from "../../assets/icons/headermain/project";
import { OverviewIcon } from "../../assets/icons/sidebar/overview";

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
                    <ul className="left">
                        <li>
                            <div className="up">
                                <div className="users">
                                    <p></p>
                                </div>
                                <div className="users done">
                                    <p></p>
                                </div>
                                <div className="users todo">
                                    <p></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button onClick={showMenuTeams}>
                                <LayerIcon />
                            </button>
                            {stateTeamsMenu ? <MenuTeams /> : null}
                        </li>
                        <li>
                            <button>
                                <ProjectIcon />
                                {/* <p>Plans</p> */}
                            </button>
                        </li>
                        <li>
                            <button>
                                <AdsIcon />
                                {/* <p>AnnyAds</p> */}
                            </button>
                        </li>
                    </ul>

                    <ul className="right">
                        <li>
                            <button onClick={showCalendarModal}>
                                <div className="down">
                                    <OverviewIcon color="#f7f4f4" />
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
                            <button onClick={showQrcode}>
                                <div title="Company" className="down">
                                    <SearchIcon />
                                </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={showQrcode}>
                                <div title="Company" className="down">
                                    <ChatIcon />
                                </div>
                            </button>
                        </li>
                        <li>
                            <button onClick={showQrcode}>
                                <div title="Company" className="down">
                                    <FilterIcon />
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