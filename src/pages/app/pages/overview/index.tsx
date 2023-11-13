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
import Chart from "chart.js/auto";
import { useEffect } from "react";

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

    
    useEffect(() => {
        const ctx = document.querySelector("#myChart") as HTMLCanvasElement;

        if (!ctx) {
            console.log('Canvas element not found');
            return
        }

        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul','Ago'],
            datasets: [{
                data: [12, 19, 3, 5, 2, 3, 6, 10],
                backgroundColor: "#6CEBA6",
                borderColor: "#6CEBA6",
                hoverBackgroundColor: "#6CEBA6",
                borderWidth: 1,

            }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                        position: "nearest",
                    }
                },

                interaction: {
                    intersect: false
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 15
                    },
                },
            }
        });

        return () => {
            myChart.destroy()
        }
    }, [])
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
                               <div className="content_chart">
                                    <canvas id="myChart"></canvas>
                               </div>
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