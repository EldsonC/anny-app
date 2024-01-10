import { QRCodeStyle } from "./style";
import QRCode from "qrcode.react";
import { useDispatch } from "react-redux";
import { hide } from "../../../../redux/features/qrcode";

export function QrCode() {
    const dispatch = useDispatch();

    const closeQrcode = () => {
        dispatch(hide())
    }

    return (
        <QRCodeStyle>
            <div className="container_qr">
                <QRCode value={"http://192.168.43.59:3002/"} size={250}/>
            </div>
            <div className="buttons">
                <div className="input_container">
                    <p>Coppy</p>
                </div>
                <div onClick={closeQrcode} className="input_container more">
                    <p>...</p>
                </div>
            </div>
        </QRCodeStyle>
    );
}