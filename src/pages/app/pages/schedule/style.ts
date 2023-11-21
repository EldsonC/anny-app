import styled from "styled-components";

export const Content = styled.div `
    .header {
        padding: 20px 0px;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 11px;

        h3 {
            font-size: 20px;
            font-weight: 500;
            color: #FFFFFF;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            color: #8D8C8C;
        }
    }

    .container_cards {
        padding-top: 29px;
        width: 100%;
        height: auto;

        display: flex;
        gap: 10px;
    }
`;