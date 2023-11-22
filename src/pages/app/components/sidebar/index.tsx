import { SideBarStyle } from "./style";
import { LogoIcon } from "../../assets/icons/sidebar/logo";
import { SearchIcon } from "../../assets/icons/sidebar/search";
import { ScheduleIcon } from "../../assets/icons/sidebar/schedule";
import { RocketIcon } from "../../assets/icons/sidebar/rocket";
import { NavLink, useNavigate } from "react-router-dom";
import { BillingIcon } from "../../assets/icons/sidebar/billing";
import { PayIcon } from "../../assets/icons/sidebar/Payment";
import { SettingsIcon } from "../../assets/icons/sidebar/settings";
import { MenuFloat } from "../menu-float";
import { useSelector, useDispatch} from "react-redux";
import { hide, show, stateMenu } from "../../../../redux/features/menu-float";

export function SideBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const stateMenuStatus = useSelector(stateMenu)

    const showMenu = () => {
        if (stateMenuStatus) {
            dispatch(hide())
        } else {
            dispatch(show())
        }
    }
    const Logout = () => {
        localStorage.removeItem("@MRYTOKEN:token")
        navigate("/")
    }
    return (
        <>
            {stateMenuStatus ? <MenuFloat/> : null}
            <SideBarStyle>
                <div className="top_side width">
                    <div className="header_side width center border cursor" onClick={showMenu}>
                        <LogoIcon/>
                    </div>
                    <div className="search_side center border cursor" onClick={showMenu}>
                        <SearchIcon/>
                    </div>

                    <ul className="width">
                        <li className="width">
                            <NavLink className={"width center cursor hight color"} to={"/dashboard/schedule"}>
                                <ScheduleIcon/>
                            </NavLink>
                        </li>
                        <li className="width">
                            <NavLink className={"width center cursor hight color"} to={"/dashboard/schedule"}>
                                <BillingIcon/>
                            </NavLink>
                        </li>
                        <li className="width">
                            <NavLink className={"width center cursor hight color"} to={"/dashboard/schedule"}>
                                <PayIcon/>
                            </NavLink>
                        </li>
                        <li className="width">
                            <NavLink className={"width center cursor hight color"} to={"/dashboard/schedule"}>
                                <SettingsIcon/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="bottom_side width center">
                    <button className="cursor" onClick={Logout}>
                        <RocketIcon/>
                    </button>
                </div>
            </SideBarStyle>
        </>
    );
}