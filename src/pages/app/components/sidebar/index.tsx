import { NavLink, useNavigate } from "react-router-dom";
import { LogoIcon } from "../../assets/icons/sidebar/logo";
import { MenuSIcon } from "../../assets/icons/sidebar/menuS";

import { GetPro } from "../getpro";
import { FloatSidebarStyle, SideBarStyle } from "./style";

export function SideBar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("@MRYTOKEN:token")
        navigate("/")
    };

    return (
        <>
            <FloatSidebarStyle>
                <div className="button_side">
                    <MenuSIcon/>
                </div>
            </FloatSidebarStyle>
            
            <SideBarStyle>
                <div>
                    <header>
                        <LogoIcon/>
                        <button>
                            <MenuSIcon/>
                        </button>
                    </header>
                    <nav>
                        <div className="container_">
                            <h3>DASHBOARD</h3>
                            <ul>
                                <li>
                                    <NavLink className={({isActive}) => isActive ? "li-base" : "li-none"} to={"/dashboard/overview"}>
                                        <p>Overview</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({isActive}) => isActive ? "li-base" : "li-none"} to={"/dashboard/schedule"}>
                                        <p>Schedule</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({isActive}) => isActive ? "li-base" : "li-none"} to={"/dashboard/boarding"}>
                                        <p>Anny Boarding</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({isActive}) => isActive ? "li-base" : "li-none"} to={"/dashboard/boarding"}>
                                        <p>Billing</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="container_">
                            <h3>ACCOUNT</h3>
                            <ul>
                                <li>
                                    <NavLink className={({isActive}) => isActive ? "li-base" : "li-none"} to={"/dashboard/settings"}>
                                        <p>Settings</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({isActive}) => isActive ? "li-base" : "li-none"} to={"/dashboard/profile"}>
                                        <p>Profile</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({isActive}) => isActive ? "li-base" : "li-none"} to={"/"} onClick={logout}>
                                        <p>Logout</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <GetPro/>
            </SideBarStyle>
        </>
    );
}