import styled from "styled-components";

export const HeaderWidth = styled.div `
    .width_container {
        margin: 0 auto;
        width: 74.875rem;
    }
`;
export const NotFoundStyle = styled.main `
    margin: 0 auto;
    width: 74.875rem;
    height: calc(100vh - 100px);

    border-left: 1px solid #141414;
    border-right: 1px solid #141414;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 100px;
        font-weight: 500;
        color: #fff;
    }

    h2 {
        margin-bottom: 18px;
        font-size: 40px;
        font-weight: 500;
        color: #33996B;
    }

    p {
        margin-bottom: 31px;
        font-size: 16px;
        font-weight: 500;
        color: #AEAEAE;
    }

    button {
        padding: 8px 20px;
        border-radius: 5px;

        background: #33996B;
        color: #fff;

        cursor: pointer;
    }
`;