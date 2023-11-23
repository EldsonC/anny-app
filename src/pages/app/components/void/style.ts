import styled from "styled-components";

export const VoidStyle = styled.div `
    margin-top: 20px;
    width: 100%;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    background-color: transparent;
    border-radius: 10px;
    border: 1px dashed #292929;

    h3 {
        font-size: 14px;
        color: #919191;
    }

    .description {
        margin-bottom: 10px;
        font-size: 12px;
        color: #919191;
    }

    .btns {
        display: flex;
        gap: 10px;
    }
`;