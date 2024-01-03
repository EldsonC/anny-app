import styled from "styled-components";

export const MenuFloatStyle = styled.div `
    width: 284px;
    height: 300px;

    position: fixed;
    top: 65px;
    left: 105px;

    z-index: 2000;

    border-radius: 17px;
    border: 1px solid var(--color-border-dark);
    background-color: var(--bg-color-dark);

    animation: ShowMenu .5s ease-in-out forwards;

    header {
        padding: 0px 15px;

        width: calc(100% - 30px);
        height: 61px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 17px 17px 0px 0px;
        background-color: #1f1f1f;

        .left_float {
            display: flex;
            align-items: center;
            gap: 6px;

            .img_float {
                width: 40px;
                height: 40px;

                border-radius: 50%;
                background-color: #FFFFFF;
                border: 1px solid #33996B;

                img {
                    width: 100%;
                    height: 100%;

                    border-radius: 50%;

                    object-fit: cover;
                }
            }

            .left_data {
                h3 {
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFFFFF;
                }

                p {
                    font-size: 10px;
                    font-weight: 500;
                    color: #9E9E9E;
                }
            }
        }
    }

    .search_container {
        width: 100%;
        height: 58px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-bottom: 1px solid var(--color-border-dark);

        .search {
            margin: 0px 15px;
            width: calc(100% - 30px);
            height: 40px;
            border-radius: 10px;

            display: flex;
            align-items: center;

            background-color: #1C1C1C;

            .input {
                padding:0px 10px;
                display: flex;
                align-items: center;

                input {
                    padding-left: 10px;
                    width: 100%;
                    height: calc(100% - 30px);
                    background-color: transparent;
                    color: #FFFFFF;
                }
            }

            .tip_search {
                width: 60px;
                min-width: 60px;
                height: 33px;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 6px;

                border-radius: 6px;
                background-color: #c7c7c7;

                cursor: pointer;

                p {
                    font-size: 16px;
                    font-weight: 600;
                    color: #000000;
                }
            }
        }
    }

    .pro {
        padding-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @keyframes ShowMenu {
        from {
            opacity: 0;
            left: -200px;
        }

        to {
            opacity: 1;
            left: 105px;
        }
    }
`;