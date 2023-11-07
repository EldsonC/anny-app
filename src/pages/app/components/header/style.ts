import styled from "styled-components";

export const HeaderStyle = styled.header `
    padding: 0 2.19rem;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .header_bar {
        padding: 0 1.25rem;
        width: calc(95% - 2.50rem);
        height: 2.1875rem;

        display: flex;
        align-items: center;
        gap: 0.75rem;

        background-color: #181818;
        border: 1px solid #2B2B2B;
        border-radius: 18rem;

        input {
            width: 100%;
            height: 100%;

            background-color: transparent;
            color: white;
        }
    }

    .btn_menu {
        cursor: pointer;
    }

    @media screen and (max-width: 1148px) {
        padding: 0 1.19rem;

        .header_bar {
            padding: 0 1.25rem;
            width: calc(90% - 2.50rem);
            height: 2.1875rem;

            display: flex;
            align-items: center;
            gap: 0.75rem;

            background-color: #181818;
            border: 1px solid #2B2B2B;
            border-radius: 18rem;

            input {
                width: 100%;
                height: 100%;

                background-color: transparent;
                color: white;
            }
        }

        .btn_menu {
            cursor: pointer;
        }
    }
`;