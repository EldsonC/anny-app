import styled from "styled-components";

export const ButtonStyle = styled.button`
    padding: 9px 20px;
    background-color: #33996B;
    border-radius: 6px;
    color: #F7F7F7;

    cursor: pointer;

    p {
        color: #F7F7F7;
    }

    &.icon-button {
        padding: 5px 10px;
        background-color: #33996B;
        border-radius: 6px;
        color: #F7F7F7;

        cursor: pointer;

        p {
            display: none;
        }
    }

    &.icon-button {
        padding: 5px 10px;
        background-color: #33996B;
        border-radius: 6px;
        color: #F7F7F7;

        cursor: pointer;

        p {
            display: none;
        }
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

    &.waring {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 10px;

        background-color: #fa0e0e42;
        border: 1px solid #db3737bb;
        
        p {
            color: #ffacacff;
        }

        cursor: pointer;
    }
`;