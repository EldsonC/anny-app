import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Breadcrumb } from "../../components/breadcrumb";

import { Content } from "./style";
import { TrillBtn } from "../../components/selectbtn";
import { CardLine } from "../../components/cardline";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { InvoiceIcon } from "../../assets/icons/content/invoice";
import { UserIcon } from "../../assets/icons/content/user";
import { ChartIcon } from "../../assets/icons/content/chart";
// import { QrCode } from "../../components/qrcode";

export function Overview() {
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
            type: 'bar',
            data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul','Ago','Ago','Ago','Ago','Ago'],
            datasets: [{
                data: [0, 0, 0, 0, 0, 10, 11, 0, 0, 0, 0, 0],
            
                borderColor: "#333333",

                hoverBorderColor: "#6CEBA6",
                borderWidth: 3,

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
        <>
            {/* <QrCode/> */}
            <MainStyle>
                <div className="container_main">
                    <SideBar/>
                    <div className="content_main">
                        <HeaderMain/>
                        <div className="content_display">
                            <Breadcrumb
                                title="Overview"
                            />
                            <Content>
                                
                                <div className="container_over">
                                    <div className="card_over">
                                        <div className="header_over">
                                            <div className="left">
                                                <InvoiceIcon/>
                                                <h4>Invoices</h4>
                                            </div>
                                            <p></p>
                                        </div>
                                        <div className="body_over">
                                            <p>30.000 <span>BRL</span></p>
                                            <div className="cont">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_over">
                                        <div className="header_over">
                                            <div className="left">
                                                <UserIcon/>
                                                <h4>Customers</h4>
                                            </div>
                                            <p></p>
                                            <div className="cont">

                                            </div>
                                        </div>
                                        <div className="body_over">
                                            <p>340</p>
                                            <div className="cont">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_over">
                                        <div className="header_over">
                                            <div className="left">
                                                <InvoiceIcon/>
                                                <h4>Growth</h4>
                                            </div>
                                            <p></p>
                                        </div>
                                        <div className="body_over">
                                            <p className="growth">+ 150%</p>
                                            <div className="cont">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="value_section">
                                    <h3>Total USD / BRL</h3>
                                    <div className="content_data">
                                        <h1>6.000 <span className="divider">/</span><span className="convert_value"> 30.000</span></h1>
                                        {/* <TrillBtn
                                            buttons={buttonsData}
                                        /> */}
                                    </div>
                                    <div className="content_pa">
                                        <p>7.46% growth trades. (Past 2 month)</p>
                                        <ChartIcon/>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <span>type and.</span></p>
                                </section>
                                

                                <section className="chart_section">
                                    {/* <div className="content_chart">
                                        <canvas id="myChart"></canvas>
                                    </div> */}
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
        </>
    );
}