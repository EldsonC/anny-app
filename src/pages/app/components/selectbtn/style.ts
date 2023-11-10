import styled from "styled-components";

export const TrillBtnStyle = styled.div `
    display: flex;
    gap: 13px;

    button {
        padding: 8px 16px;
        border: 1px solid #2B2B2B;
        border-radius: 4px;

        background-color: #0F1012;
        color: #424242;

        font-size: 12px;
        font-weight: 600;

        cursor: pointer;

        &:hover {
            background-color: #1F1F21;
            color: #6CEBA6;
        }
    }
`;