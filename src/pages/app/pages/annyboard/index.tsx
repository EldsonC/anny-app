import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";

import { Content } from "./style";
import { HeaderMain } from "../../components/headerMain";
import { RightBar } from "../../components/rightbar";
import { Void } from "../../components/void";
import { BoardIcon } from "../../assets/icons/content/board";

export function AnnyBoard() {
    return (
        <>
            <MainStyle>
                <div className="container_main">
                    <SideBar/>
                    <div className="content_main">
                        <HeaderMain/>
                        <div className="content_display">
                            <Content>
                                <Void
                                    icon={<BoardIcon/>}
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
                    <RightBar/>
                </div>
            </MainStyle>
        </>
    );
}