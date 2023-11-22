import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Content } from "./style";
import { Card } from "../../components/card";
import { schedule } from "../../mocks/schedule";

interface ScheduleSchema {
    day: number;
    date: string;
    schedule: {
        start: string,
        end: string,
    };
    name: string;
}

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
                                    {schedule.map((data:ScheduleSchema, index) => {
                                        return (
                                            <Card
                                                key={index}
                                                name={data.name}
                                                date={data.date}
                                                day={data.day}
                                                schedule={
                                                    {
                                                        start: data.schedule.start,
                                                        end: data.schedule.end
                                                    }
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </Content>
                        </div>
                    </div>
                    <RightBar/>
                </div>
        </MainStyle>
    );
}