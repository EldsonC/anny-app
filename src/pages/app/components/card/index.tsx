import { DownIcon } from "../../assets/icons/headermain/down";
import { CardStyle } from "./style";

interface ScheduleSchema {
    day: number;
    date: string;
    schedule: {
        start: string,
        end: string,
    };
    name: string;
}

export function Card({day, date, schedule, name}:ScheduleSchema) {
    return (
        <CardStyle>
            <div className="date">
                <p>{date}</p>
                <h2>{day}</h2>
            </div>
            <div className="data">
                <p>{schedule.start} - {schedule.end}</p>
                <h4>{name}</h4>
            </div>
            <div className="employee">
                {/* <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            </div>
            <button>
                <p>Edit</p>
                <DownIcon/>
            </button>
        </CardStyle>
    );
}