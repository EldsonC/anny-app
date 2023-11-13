import { Header } from "../../components/header";
import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Breadcrumb } from "../../components/breadcrumb";
import { ChartIcon } from "../../assets/icons/content/chart";
import { Content } from "./style";
import { TrillBtn } from "../../components/selectbtn";
import { CardLine } from "../../components/cardline";

export function Overview() {
    const buttonsData = [
        {label: "24H", onClick: () => console.log("")},
        {label: "2D", onClick: () => console.log("")},
        {label: "2W", onClick: () => console.log("")},
        {label: "2M", onClick: () => console.log("")},
        {label: "2Y", onClick: () => console.log("")}
    ]

    const buttonsTransactions = [
        {label: "Newest", onClick: () => console.log("")},
        {label: "Oldest", onClick: () => console.log("")},
    ]

    return (
        <MainStyle>
            <Header/>
            <div className="container_main">
                <SideBar/>
                <div className="content_main">
                    <HeaderMain/>
                    <div className="content_display">
                        <Breadcrumb
                            title="Overview"
                        />
                        <Content>
                            <section className="value_section">
                                <h3>Total USD / BRL</h3>
                                <div className="content_data">
                                    <h1>6.000 <span className="divider">/</span><span className="convert_value"> 30.000</span></h1>
                                    <TrillBtn
                                        buttons={buttonsData}
                                    />
                                </div>
                                <div className="content_pa">
                                    <p>7.46% growth trades. (Past 2 month)</p>
                                    <ChartIcon/>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <span>type and.</span></p>
                            </section>

                            <section className="transaction_section">
                                <div className="content_p">
                                    <p>Transaction Archive</p>
                                    <TrillBtn
                                        buttons={buttonsTransactions}
                                    />
                                </div>
                                <div className="container_cards">
                                    <CardLine/>
                                    <CardLine/>
                                    <CardLine/>
                                </div>
                            </section>
                        </Content>
                    </div>
                </div>
                <RightBar/>
            </div>
        </MainStyle>
    );
}