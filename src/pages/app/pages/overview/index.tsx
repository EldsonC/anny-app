import { Header } from "../../components/header";
import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "./style";

export function Overview() {
    return (
        <MainStyle>
            <Header/>
            <div className="container_main">
                <SideBar/>
                <RightBar/>
            </div>
        </MainStyle>
    );
}