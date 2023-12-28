import { useState } from "react";
import { DownIcon } from "../../assets/icons/headermain/down";
import { CardStyle } from "./style";
import { Button } from "../../../../components/buttons";
import img1 from "../../assets/img/Eldson.jpeg"
import logo from "../../assets/img/logoIvy.jpg"

interface ScheduleSchema {
    day: string;
    date: string;
    schedule: {
        start: string,
        end?: string,
    };
    name: string;
    details: string;
}

interface CardState {
    expanded: boolean;
}

export function Card({day, date, schedule, name, details}:ScheduleSchema) {
    const [ state, setState ] = useState<CardState>({ expanded: false });

    const toggleExpand = () => {
        setState((prevState) => ({ expanded: !prevState.expanded }))
    }
    return (
        <CardStyle>
            <div className="card-null" style={!state.expanded ? {minHeight: "113px"} : {}}>
                <div className="left_card">
                    <div className="date">
                        <p>{date}</p>
                        <h2>{day}</h2>
                    </div>
                    <div className="data">
                        <p>{schedule.start}</p>
                        <h4>{name}</h4>
                    </div>
                </div>
                <div className="btns">
                    <button onClick={toggleExpand}>
                        <DownIcon/>
                    </button>
                </div>
            </div>
            { state.expanded && (
                <div className="expand-card">
                    <div className="images">
                        <img className="image-1" src={logo} alt="" />
                        <img className="image-2" src={img1} alt="" />
                    </div>
                    <pre className="details">
                        {details}
                    </pre>
                    <div className="buttons">
                        <Button
                            title="Done"
                        />
                        <Button
                            type="void-button"
                            title="Delete"
                        />
                    </div>
                </div>
            )}
        </CardStyle>
    );
}