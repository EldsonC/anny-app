import { Button } from "../../../../components/buttons";
import { StyleEmployeeModal } from "./style";
import { Calendar as CalendarComponent } from "../calendar/calendar";
import logo from "../../../../assets/img/newLogo.png";
import { HelpIcon } from "../../assets/icons/sidebar/help";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../../../redux/features/calendar";
import { Notify } from "../notify";
import { AppStyle } from "../../../../appstyle";
import { useState } from "react";
import { getSettings, stateSettingsDay } from "../../../../redux/features/dataDaySettings";
import { Switch } from "../swich";

interface NotifyProps {
    message?: string;
    className?: string;
}

interface DataDay {
    month: string;
    day: string;
    hours: string[];
}

export function Calendar() {
    const dispatch = useDispatch();
    const [arrayNotify, setArrayNotify] = useState<NotifyProps[]>([]);
    const settingsData = useSelector(stateSettingsDay);

    const closeModal = () => {
        dispatch(hide());
    }

    const handleDateSelect = (date: Date) => {
        const data = {
            month: date.getUTCMonth(),
            day: date.getDate(),
            hours: [
                "8:00",
                "8:30",
                "9:00",
                "9:30",
                "10:00"
            ]
        }

        dispatch(getSettings([data]))
    };

    return (
        <>
            <AppStyle>
                {arrayNotify.map((notification, index) => {
                    return (
                        <Notify
                            key={index}
                            className={notification.className}
                            message={notification.message}
                            onAnimationEnd={() => {
                                setTimeout(() => {
                                    setArrayNotify((prevArrayNotify) => prevArrayNotify.slice(0, index).concat(prevArrayNotify.slice(index + 1)));
                                }, 10000)
                            }}
                        />
                    );
                })}

            </AppStyle>
            <StyleEmployeeModal>
                <div className="container_form">
                    <div className="content">
                        <header>
                            <img src={logo} width={110} alt="logo anny" />
                        </header>
                        <div className="content_main">
                            <CalendarComponent onSelectDate={handleDateSelect} />
                        </div>
                    </div>
                    <div className="settings">
                        <header>
                            <div className="buttons">
                                <Button
                                    type="void-button-icon"
                                    icon={<HelpIcon color={"#999999"} size={20} />}
                                />
                                <Button
                                    type=""
                                    title="Save"
                                    clickAction={closeModal}
                                />
                                <Button
                                    type="void-button"
                                    title="Cancel"
                                    clickAction={closeModal}
                                />
                            </div>
                        </header>
                        <div className="container_settings">
                            {settingsData.map((data: DataDay) => {
                                return (
                                    <>
                                        <div className="header">
                                            <h4>Settings</h4>
                                        </div>
                                        <div className="switch_container">
                                            <div className="left_switch">
                                                <h4>Close</h4>
                                                <p>Your company is close in the day</p>
                                            </div>
                                            <div className="right_switch">
                                                <Switch />
                                            </div>
                                        </div>
                                        
                                        <label>Hours</label>
                                        <div className="container_hours">
                                            {data.hours.map((hours) => {
                                                return (
                                                    <p className="hour">{hours}</p>
                                                );
                                            })}
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </StyleEmployeeModal>
        </>
    );
}