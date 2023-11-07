import styled from "styled-components";

export const GetProStyle = styled.div `
    padding: 1rem;
    width: calc(100% - 2rem);
    height: calc(9.1875rem - 2rem);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 0.3125rem;
    border: 1px solid #424242;
    background-color: #2B2B2B;

    .text_pro {
        h4 {
            margin-bottom: 0.69rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: #FFFFFF;

            span {
                color: #6CEBA6;
            }
        }

        p {
            font-size: 0.75rem;
            font-weight: 500;
            color: #6E6E6E;
        }
    }

    .button_container {
        display: flex;
        align-items: center;
        gap: 0.62rem;
    }
`;