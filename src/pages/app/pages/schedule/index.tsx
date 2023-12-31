import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Content } from "./style";
import { Card } from "../../components/card";
import { schedule } from "../../mocks/schedule";
import { Void } from "../../components/void";
import { ScheduleIcon } from "../../assets/icons/content/schedule";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { darkTheme } from "../../../../App";
import { SearchIcon } from "../../assets/icons/sidebar/search";
import { LogoIcon } from "../../assets/icons/sidebar/logo";
import { QrCode } from "../../components/qrcode";
import { useSelector } from "react-redux";
import { stateQrcode } from "../../../../redux/features/qrcode";
import { FilterIcon } from "../../assets/icons/content/filter";
import { ChatIcon } from "../../assets/icons/content/chat";

interface ScheduleSchema {
    day: number;
    date: string;
    schedule: {
        start: string,
        end: string,
    };
    name: string;
    details: string;
}

export function Schedule() {
    const theme = useContext(ThemeContext) || darkTheme;
    const [search, setSearch] = useState("");
    const stateQR = useSelector(stateQrcode);

    const bookingFilter = schedule.filter((booking) =>
        Object.values(booking).some((value) =>
            typeof value === "string" && value.toLowerCase().includes(search.toLowerCase())
        )
    )
    return (
        <>
            {stateQR ? <QrCode /> : null}
            <MainStyle>
                <div className="markStyle">
                    <div className="left">
                        <LogoIcon
                            size={30}
                        />
                        <p>AnnyApp <span>Start</span></p>
                    </div>

                    <div className="right">
                        <button title="Minimize" className="minimize"></button>
                        <button title="Maximize" className="maximize"></button>
                        <button title="Close" className="mlose"></button>
                    </div>
                </div>
                <div className="container_main">
                    <SideBar />
                    <div className="content_main">
                        <HeaderMain />
                        <div className="content_display">
                            <Content>
                                <div className="header">
                                    <div className="left">
                                        <div className="up">
                                            <h3>Bookings</h3>
                                            <div className="users">
                                                <p>28 users</p>
                                            </div>
                                            <div className="users done">
                                                <p>23 done</p>
                                            </div>
                                            <div className="users todo">
                                                <p>05 to do</p>
                                            </div>
                                        </div>
                                        <p>See your scheduled events from your calendar events</p>
                                    </div>

                                    <div className="container_filters">
                                        <button className="button_filter">
                                            <ChatIcon/>
                                        </button>
                                        <button className="button_filter">
                                            <FilterIcon/>
                                        </button>
                                        <div className="search">
                                            <div className="input">
                                                <SearchIcon />
                                                <input
                                                    type="text"
                                                    placeholder="Search..."
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container_cards">
                                    {bookingFilter.length <= 0 ? <Void titleButtonOne="New cliente" titleButtonTwo="add" icon={<ScheduleIcon color={theme.colorText} />} title="" description="Opps! nao encontramos" /> : null}
                                    {bookingFilter.map((data: ScheduleSchema, index) => {
                                        return (
                                            <Card
                                                key={index}
                                                name={data.name}
                                                date={data.date}
                                                day={data.day.toString()}
                                                schedule={
                                                    {
                                                        start: data.schedule.start,

                                                    }
                                                }
                                                details={data.details}
                                            />
                                        );
                                    })}
                                </div>
                            </Content>
                        </div>
                    </div>
                    <RightBar />
                </div>
                <footer></footer>
            </MainStyle>
        </>
    );
}