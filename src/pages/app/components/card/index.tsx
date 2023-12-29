import { useState } from "react";
import { DownIcon } from "../../assets/icons/headermain/down";
import { CardStyle } from "./style";
import { Button } from "../../../../components/buttons";
import { DoneIcon } from "../../assets/icons/content/done";
// import img1 from "../../assets/img/Eldson.jpeg";
// import logo from "../../assets/img/logoIvy.jpg";

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

export function Card({ day, date, schedule, name, details }: ScheduleSchema) {
    const [state, setState] = useState<CardState>({ expanded: false });

    const toggleExpand = () => {
        setState((prevState) => ({ expanded: !prevState.expanded }))
    }
    return (
        <CardStyle>
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
                                {/* <img className="image-1" src={logo} alt="" /> */}
                                {/* <img className="image-2" src={logo} alt="" /> */}
                                <div className="status"></div>
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
                            icon={<DoneIcon/>}
                        />
                        {/* <Button
                            type="waring"
                            title="del"
                        /> */}
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