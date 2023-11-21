import { SideBarStyle } from "./style";
import { LogoIcon } from "../../assets/icons/sidebar/logo";
import { SearchIcon } from "../../assets/icons/sidebar/search";
import { OverviewIcon } from "../../assets/icons/sidebar/overview";
import { ScheduleIcon } from "../../assets/icons/sidebar/schedule";
import { RocketIcon } from "../../assets/icons/sidebar/rocket";
import { NavLink } from "react-router-dom";

export function SideBar() {

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
                            <NavLink className={"width center cursor hight color"} to={"/dashboard/overview"}>
                                <OverviewIcon/>
                            </NavLink>
                        </li>
                        <li className="width">
                            <NavLink className={"width center cursor hight color"} to={"/dashboard/schedule"}>
                                <ScheduleIcon/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="bottom_side width center">
                    <button className="cursor">
                        <RocketIcon/>
                    </button>
                </div>
            </SideBarStyle>
        </>
    );
}