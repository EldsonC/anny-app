import { Header } from "../../components/header";
import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Content } from "./style";
import { Breadcrumb } from "../../components/breadcrumb";
import { TrillBtn } from "../../components/selectbtn";
import { Card } from "../../components/card";

export function Schedule() {
    const buttonsManagerCards  = [
        {label: "All", onClick: () => console.log("")},
        {label: "Today", onClick: () => console.log("")},
        {label: "Tomorow", onClick: () => console.log("")}, 
    ]
    return (
        <MainStyle>
            <Header/>
            <div className="container_main">
                <SideBar/>
                <div className="content_main">
                    <HeaderMain/>
                    <div className="content_display">
                        <div className="card-manager">
                            <Breadcrumb
                                title="Schedule"
                            />

                            <TrillBtn
                                buttons={buttonsManagerCards}
                            />
                        </div>
                        <Content>
                            <section className="collection_card">
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </section>
                        </Content>
                    </div>
                </div>
                <RightBar/>
            </div>
        </MainStyle>
    );
}