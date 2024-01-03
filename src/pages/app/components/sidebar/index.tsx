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
import { useSelector, useDispatch } from "react-redux";
import { hide, show, stateMenu } from "../../../../redux/features/menu-float";
import { HelpIcon } from "../../assets/icons/sidebar/help";
import { useContext, useState } from "react";
import { ThemeIcon } from "../../assets/icons/sidebar/theme";
import { ThemeContext } from "styled-components";
import { darkTheme } from "../../../../App";
import { setDark, setLight, stateTheme } from "../../../../redux/features/theme";
import { OverviewIcon } from "../../assets/icons/sidebar/overview";

export function SideBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const theme = useContext(ThemeContext) || darkTheme;

    const colorDefault = "#8C8C8C"
    const [schedule, setSchedule] = useState<string>(colorDefault)
    const [payment, setPayment] = useState<string>(colorDefault)
    const [overview, setOverview] = useState<string>(colorDefault)

    const stateMenuStatus = useSelector(stateMenu)
    const stateThemeStatus = useSelector(stateTheme)

    const showMenu = () => {
        if (stateMenuStatus) {
            dispatch(hide())
        } else {
            dispatch(show())
        }
    }

    const switchTheme = () => {
        const newTheme = stateThemeStatus === "dark" ? "light" : "dark";
        dispatch(newTheme === "light" ? setLight() : setDark());
        localStorage.setItem("theme", JSON.stringify(newTheme));
    };

    const Logout = () => {
        localStorage.removeItem("@MRYTOKEN:token")
        localStorage.removeItem("@USER:token")
        navigate("/dashboard/sign-in")
    }
    return (
        <>
            {stateMenuStatus ? <MenuFloat /> : null}
            <SideBarStyle>
                <div className="top_side width">
                    <div className="header_side width center border cursor" onClick={showMenu}>
                        <LogoIcon />
                    </div>
                    <div className="search_side center border cursor" onClick={showMenu}>
                        <SearchIcon />
                    </div>

                    <ul className="width">
                        <li title="Overview" className="width">
                            <NavLink className={({ isActive }) => isActive ? (setOverview(theme.isActiveColor), "width center cursor hight color") : "width center cursor hight color"} to={"/dashboard/overview"}>
                                <OverviewIcon
                                    color={overview}
                                />
                            </NavLink>
                        </li>
                        <li title="Schedule" className="width">
                            <NavLink className={({ isActive }) => isActive ? (setSchedule(theme.isActiveColor), "width center cursor hight color") : "width center cursor hight color"} to={"/dashboard/schedule"}>
                                <ScheduleIcon
                                    color={schedule}
                                />
                            </NavLink>
                        </li>
                        <li title="AnnyBoard" className="width">
                            <NavLink className={({ isActive }) => isActive ? (setPayment(theme.isActiveColor), "width center cursor hight color") : "width center cursor hight color"} to={"/dashboard/annyboard"}>
                                <BillingIcon
                                    color={payment}
                                />
                            </NavLink>
                        </li>
                        <li title="Payment" className="width">
                            <NavLink className={({ isActive }) => isActive ? ("width center cursor hight color") : "width center cursor hight color"} to={"/dashboard/schedule"}>
                                <PayIcon />
                            </NavLink>
                        </li>
                        <li title="Settings" className="width">
                            <NavLink className={({ isActive }) => isActive ? ("width center cursor hight color") : "width center cursor hight color"} to={"/dashboard/schedule"}>
                                <SettingsIcon />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="bottom_side width center">
                    <button onClick={switchTheme} title="Theme" className="cursor back">
                        <ThemeIcon color={theme.colorText} />
                    </button>
                    <button title="Help" className="cursor back">
                        <a href="https://www.instagram.com/ivy.soft/" target="_blank">
                            <HelpIcon
                                color={theme.colorText}
                            />
                        </a>
                    </button>
                    <button title="Logout" className="cursor" onClick={Logout}>
                        <RocketIcon />
                    </button>
                </div>
            </SideBarStyle>
        </>
    );
}