import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";

import { Content } from "./style";
import { HeaderMain } from "../../components/headerMain";
import { RightBar } from "../../components/rightbar";
import { Void } from "../../components/void";
import { BoardIcon } from "../../assets/icons/content/board";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darkTheme } from "../../../../App";
import { LogoIcon } from "../../assets/icons/sidebar/logo";

export function AnnyBoard() {
    const theme = useContext(ThemeContext) || darkTheme;
    return (
        <>
            <MainStyle>
                <div className="markStyle">
                    <div className="left">
                        <LogoIcon
                            size={30}
                        />
                        <p>AnnyApp <span>Start</span></p>
                    </div>

                    <div className="right">
                        <button title="Minimize" className="minimize"></button>
                        <button title="Maximize" className="maximize"></button>
                        <button title="Close" className="mlose"></button>
                    </div>
                </div>
                <div className="container_main">
                    <SideBar />
                    <div className="content_main">
                        <HeaderMain />
                        <div className="content_display">
                            <Content>
                                <Void
                                    icon={<BoardIcon color={theme.colorText} />}
                                    title="Create Your Template"
                                    description="we have created a few template collections that
                                    generally have the fields needed for common collections
                                    in most applications."

                                    titleButtonOne="New template"
                                    titleButtonTwo="Import template"
                                />
                            </Content>
                        </div>
                    </div>
                    <RightBar />
                </div>
                <footer></footer>
            </MainStyle>
        </>
    );
}