import styled from "styled-components";

export const HeaderMainStyle = styled.header `
    padding-bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0px;

    background-color: #0F1012;

    ul {
        display: flex;
        align-items: center;
        gap: 1.37rem;

        li {
            button {
                padding-top: 0.44rem;
                padding-bottom: 0.44rem;
                padding-right: 1.5rem;
                display: flex;
                align-items: center;
                gap: 0.62rem;

                background-color: transparent;
                border-right: 1px solid #282A2D;

                cursor: pointer;

                p {
                    font-size: 0.875rem;
                    font-weight: 400;
                    color: #B3B3B3;
                }
            }
        }
    }

    .right_content {
        display: flex;
        align-items: center;
        gap: 0.56rem;
        .text_profile {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            h4 {
                font-size: 0.875rem;
                font-weight: 500;
                color: #FFFFFF;
            }

            p {
                font-size: 0.75rem;
                font-weight: 500;
                color: #6E6E6E;
            }
        }

        .profile_picture {
            width: 2.5rem;
            height: 2.5rem;

            border-radius: 50%;
            background-color: #FFFFFF;

            img {
                width: 100%;
                height: 100%;

                border-radius: 50%;

                object-fit: cover;
            }
        }
    }

    @media screen and (max-width: 480px) {
        position: fixed;
        top: 60px;
        .right_content {
            display: none;
        }
    }
`;