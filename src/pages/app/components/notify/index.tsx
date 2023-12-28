import { NotifyStyle } from "./style";

export function Notify() {
    return (
        <NotifyStyle>
            <div className="notify_container">
                <div className="square">

                </div>
                <div className="data_notify">
                    <h4>Remenber</h4>
                    <p>Proximo cliente as 14h30</p>
                </div>
            </div>
            <div className="bar-time"></div>
        </NotifyStyle>
    );
}