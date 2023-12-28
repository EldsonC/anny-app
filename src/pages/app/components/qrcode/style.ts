import styled from "styled-components";

export const QRCodeStyle = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0px;

    background-color: #0000009a;
    z-index: 2000;

    animation: qrcode 0.5s;

    .container_qr {
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #2B2B2B;
        border-radius: 10px;
    }

    .buttons {
        display: flex;
        gap: 10px;

        .input_container {
            margin-top: 20px;
            padding: 10px 20px;
    
            display: flex;
            justify-content: center;
            align-items: center;
    
            background-color: #4CAF50;
            border-radius: 10px;
    
            cursor: pointer;
    
            p {
                font-size: 14px;
                color: #ffffff;
            }
        }

        .more {
            background-color: #2B2B2B;
            border: 1px solid #414141;
        }
    }

    @keyframes qrcode {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;