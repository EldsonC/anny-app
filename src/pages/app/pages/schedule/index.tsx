import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Content } from "./style";

export function Schedule() {
    return (
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
    );
}