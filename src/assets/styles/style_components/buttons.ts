import styled from "styled-components";

export const ButtonStyle = styled.button `
    padding: 9px 20px;
    background-color: #33996B;
    border-radius: 6px;
    color: #F7F7F7;

    cursor: pointer;

    p {
        color: #F7F7F7;
    }

    &.void-button {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 10px;

        background-color: #2E2E2E;
        border: 1px solid #4D4D4D;

        cursor: pointer;

    }
`;