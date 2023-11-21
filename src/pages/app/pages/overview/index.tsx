import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";

import { Content } from "./style";
import { HeaderMain } from "../../components/headerMain";
import { RightBar } from "../../components/rightbar";

export function Overview() {

    return (
        <>
            <MainStyle>
                <div className="container_main">
                    <SideBar/>
                    <div className="content_main">
                        <HeaderMain/>
                        <div className="content_display">
                            <Content>

                            </Content>
                        </div>
                    </div>
                    <RightBar/>
                </div>
            </MainStyle>
        </>
    );
}