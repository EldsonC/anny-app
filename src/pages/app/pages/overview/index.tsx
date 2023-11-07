import { Header } from "../../components/header";
import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";

export function Overview() {
    return (
        <MainStyle>
            <Header/>
            <div className="container_main">
                <SideBar/>
                <div className="content_main">
                    <HeaderMain/>
                </div>
                <RightBar/>
            </div>
        </MainStyle>
    );
}