import { Button } from "../../../../components/buttons";
import { StyleEmployeeModal } from "./style";
import { Calendar as CalendarComponent } from "../calendar/calendar";
import logo from "../../../../assets/img/newLogo.png";
import { HelpIcon } from "../../assets/icons/sidebar/help";
import { useDispatch } from "react-redux";
import { hide } from "../../../../redux/features/calendar";
import { Notify } from "../notify";
import { AppStyle } from "../../../../appstyle";
import { useState } from "react";

interface NotifyProps {
    message?: string;
    className?: string;
}
export function Calendar() {
    const dispatch = useDispatch();
    const [arrayNotify, setArrayNotify] = useState<NotifyProps[]>([]);

    const closeModal = () => {
        dispatch(hide())
    }

    const handleDateSelect = (date: Date) => {
        console.log('Selected date:', date);
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
                                    type="void-button"
                                    title="Cancel"
                                    clickAction={closeModal}
                                />
                            </div>
                        </header>
                    </div>
                </div>
            </StyleEmployeeModal>
        </>
    );
}