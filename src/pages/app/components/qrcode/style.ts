import styled from "styled-components";

export const QRCodeStyle = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0px;

    background-color: #0000007c;
    z-index: 2000;

    .container_qr {
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #2B2B2B;
        border-radius: 10px;
    }
`;