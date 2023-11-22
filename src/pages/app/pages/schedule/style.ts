import styled from "styled-components";

export const Content = styled.div `
    .header {
        padding: 20px 0px;
        width: 100%;

        position: sticky;
        top: 0px;

        display: flex;
        flex-direction: column;
        gap: 11px;

        background-color: #111;
        border-bottom: 1px solid #292929;

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
        flex-wrap: wrap;
        gap: 10px;
    }
`;