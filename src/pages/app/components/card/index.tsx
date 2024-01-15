import { useState } from "react";
import { DownIcon } from "../../assets/icons/headermain/down";
import { CardStyle } from "./style";
import { Button } from "../../../../components/buttons";
import { DoneIcon } from "../../assets/icons/content/done";

interface ScheduleSchema {
    status_global: number;
    day: string;
    date: string;
    plan: boolean;
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

export function Card({ day, date, schedule, name, details, status_global, plan }: ScheduleSchema) {
    const [state, setState] = useState<CardState>({ expanded: true });

    const toggleExpand = () => {
        setState((prevState) => ({ expanded: !prevState.expanded }))
    }
    return (
        <CardStyle>
            {plan ? 
                <div className="vip">
                    Vip
                </div>
            : null}
            <div className="card-null" style={!state.expanded ? { minHeight: "113px" } : {}}>
                <div className="left_card">
                    <div className="date">
                        <p>{date}</p>
                        <h2>{day}</h2>
                    </div>
                    <div className="data">
                        <div className="top_data">
                            <p>{schedule.start}</p>
                            <div className="images">
                                <div className={status_global === 0 ? "status" : status_global === 1 ? "status violet" : "status green"}></div>
                            </div>
                        </div>
                        <h4>{name}</h4>
                    </div>
                </div>
                <div className="btns">
                    <button onClick={toggleExpand}>
                        <DownIcon />
                    </button>
                </div>
            </div>
            {state.expanded && (
                <div className="expand-card">
                    <div className="container_details">
                        <div className="details">
                            <p>{details}</p>
                        </div>
                        <div className="details">
                            <p>Unha</p>
                        </div>
                        <div className="details">
                            <p>Barba</p>
                        </div>
                        <div className="details">
                            <p>Sobrancelha</p>
                        </div>
                        <div className="details">
                            <p>...</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button
                            type="icon-button"
                            title=""
                            icon={<DoneIcon />}
                        />
                        <Button
                            type="void-button"
                            title="..."
                        />
                    </div>
                </div>
            )}
        </CardStyle>
    );
}