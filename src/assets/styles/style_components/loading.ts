import styled from "styled-components";

export const LoadingStyle = styled.div `
    width: 100vw;
    height: 100vh;

    position: fixed;

    background-color: #111010;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1500;

    img {
        width: 300px;
    }
`;