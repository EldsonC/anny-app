import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Content } from "./style";
import { Card } from "../../components/card";

export function Schedule() {
    return (
        <MainStyle>
            <div className="container_main">
                    <SideBar/>
                    <div className="content_main">
                        <HeaderMain/>
                        <div className="content_display">
                            <Content>
                                <div className="header">
                                    <h3>Bookings</h3>
                                    <p>See your scheduled events from your calendar events</p>
                                </div>
                                <div className="container_cards">
                                    <Card/>
                                    <Card/>
                                </div>
                            </Content>
                        </div>
                    </div>
                    <RightBar/>
                </div>
        </MainStyle>
    );
}