import { SideBarStyle } from "./style";
import { LogoIcon } from "../../assets/icons/sidebar/logo";
import { SearchIcon } from "../../assets/icons/sidebar/search";
import { ScheduleIcon } from "../../assets/icons/sidebar/schedule";
import { RocketIcon } from "../../assets/icons/sidebar/rocket";
import { NavLink, useNavigate } from "react-router-dom";
import { BillingIcon } from "../../assets/icons/sidebar/billing";
import { PayIcon } from "../../assets/icons/sidebar/Payment";
import { SettingsIcon } from "../../assets/icons/sidebar/settings";

export function SideBar() {
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem("@MRYTOKEN:token")
        navigate("/")
    }
    return (
        <>
            <SideBarStyle>
                <div className="top_side width">
                    <div className="header_side width center border">
                        <LogoIcon/>
                    </div>
                    <div className="search_side center border cursor">
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