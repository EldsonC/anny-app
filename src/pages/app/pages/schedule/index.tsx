import { RightBar } from "../../components/rightbar";
import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";
import { HeaderMain } from "../../components/headerMain";
import { Content } from "./style";
import { Card } from "../../components/card";
import { schedule } from "../../mocks/schedule";
import { Void } from "../../components/void";
import { ScheduleIcon } from "../../assets/icons/content/schedule";

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
                                <div className="container_cards">
                                    {schedule.length <= 0 ? <Void icon={<ScheduleIcon/>} title="Nobody Schedule" description=""/> : null}
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