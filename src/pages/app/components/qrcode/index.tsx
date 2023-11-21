import { useEffect, useState } from "react";
import { QRCodeStyle } from "./style";
import QRCode from "qrcode.react";

export function QrCode() {
    const [pixData, setPixData] = useState<string>('')


    const generatePixData = () => {
        const chavePix: string = 'einsteine@meu.pix';
        const valor: number = 42.00; // Valor em reais
        const nomeRecebedor: string = 'ELDSON PEREIRA CALDAS';
        const cidade: string = 'SAOPAULO';
        const txId: string = '323050';
        const crc16: string = 'B1DC';

    // Construa a string Pix Payload Format
    const pixPayload: string = `00020101021126390014BR.GOV.BCB.PIX0117${chavePix}52040000530398654042.005802BR5921${nomeRecebedor}6008${cidade}6108${txId}62070503***6304${crc16}`;

        if (valor > 0) {
            const formattedValue:string = valor.toFixed(2).replace('.', '');
            const valueField:string = `5402${formattedValue.length}${formattedValue}`;
            setPixData(pixPayload + valueField)
        } else {
            setPixData(pixPayload)
        }
    }

    useEffect(() => {
        generatePixData();
    }, [])
    return (
        <QRCodeStyle>
            <div className="container_qr">
                <QRCode value={pixData}/>
            </div>
        </QRCodeStyle>
    );
}