import { NavLink } from "react-router-dom";
import { MobileMenuIcon } from "../assets/icon/mobileMenu";
import { HeaderStyle } from "../assets/styles/style_components/header";
import { useEffect, useState } from "react";

import newLogo from "../assets/img/newLogo.png"

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
                        <img src={newLogo} width={100} alt="logo anny" />
                    </NavLink>
                    <ul className="ul-hide">
                        <li>
                            <a href="#about">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#features">
                                Download
                            </a>
                        </li>
                        
                        <li>
                            <a href="#plans">
                                Planos
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="buttons">
                    <NavLink to={"/dashboard/sign-up"}>
                        <button className="btns_header btn-hide">
                            Começar agora
                        </button>
                    </NavLink>
                    <NavLink to={"/dashboard/sign-in"}>
                        <button className="btns_header void btn-hide">
                            Entrar
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