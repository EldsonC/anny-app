import { NavLink } from "react-router-dom";
import { LogoIcon } from "../assets/icon/logo";
import { MobileMenuIcon } from "../assets/icon/mobileMenu";
import { HeaderStyle } from "../assets/styles/style_components/header";
import { useEffect, useState } from "react";

export function HeaderComponent() {
    const [ scrollY, setScrollY ] = useState<number>(0); 

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        const header = document.querySelector("#container_header") as HTMLDivElement;
        if (scrollY >= 200) {
            header.classList.add("full-size-header")
        } else {
            header.classList.remove("full-size-header")
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrollY])

    

    return (
        <HeaderStyle>
            <div className="container_header" id="container_header">
                <div className="left_container">
                    <NavLink to={"/"}>
                        <LogoIcon/>
                    </NavLink>
                    <ul className="ul-hide">
                        <li>
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#features">
                                Download
                            </a>
                        </li>
                        <li>
                            <a href="#faqs">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#plans">
                                Princing
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="buttons">
                    <NavLink to={"/register"}>
                        <button className="btns_header btn-hide">
                            Start your plan
                        </button>
                    </NavLink>
                    <NavLink to={"/login"}>
                        <button className="btns_header void btn-hide">
                            Sign in
                        </button>
                    </NavLink>
                    <button className="menu-hide">
                        <MobileMenuIcon/>
                    </button>
                </div>
            </div>
        </HeaderStyle>
    );
}