import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Content } from "./style";
import { Card } from "../../components/card";
import { schedule } from "../../mocks/schedule";
import { Void } from "../../components/void";
import { ScheduleIcon } from "../../assets/icons/content/schedule";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darkTheme } from "../../../../App";
import { LogoIcon } from "../../assets/icons/sidebar/logo";
import { QrCode } from "../../components/qrcode";
import { useSelector } from "react-redux";
import { stateQrcode } from "../../../../redux/features/qrcode";
import { Calendar } from "../../components/calendarModal";
import { stateCalendar } from "../../../../redux/features/calendar";

interface ScheduleSchema {
    status_global: number;
    day: number;
    date: string;
    plan: boolean;
    schedule: {
        start: string,
        end: string,
    };
    name: string;
    details: string;
}

export function Schedule() {
    const theme = useContext(ThemeContext) || darkTheme;
    // const [search, setSearch] = useState("");
    const stateQR = useSelector(stateQrcode);
    const calendarState = useSelector(stateCalendar);

    // const bookingFilter = schedule.filter((booking) =>
    //     Object.values(booking).some((value) =>
    //         typeof value === "string" && value.toLowerCase().includes(search.toLowerCase())
    //     )
    // )
    return (
        <>
            {stateQR ? <QrCode /> : null}
            {calendarState ? <Calendar/> : null}
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
                                <div className="container_cards">
                                    {schedule.length <= 0 ? <Void titleButtonOne="New cliente" titleButtonTwo="add" icon={<ScheduleIcon color={theme.colorText} />} title="" description="Opps! nao encontramos" /> : null}
                                    {schedule.map((data: ScheduleSchema, index) => {
                                        return (
                                            <Card
                                                status_global={data.status_global}
                                                key={index}
                                                name={data.name}
                                                date={data.date}
                                                plan={data.plan}
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
            </MainStyle>
        </>
    );
}