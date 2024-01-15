import styled from "styled-components";

export const Content = styled.div`
    .container_cards {
        /* padding-top: 29px; */
        width: 100%;
        height: auto;

        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;
    }

    @media screen and (max-width: 750px) {

        .container_cards {
            padding-top: 29px;
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
`;