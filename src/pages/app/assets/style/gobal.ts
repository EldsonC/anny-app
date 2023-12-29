import styled from "styled-components";

export const MainStyle = styled.main `
    width:  100vw;

    display: flex;
    flex-direction: column;

    user-select: none;

    .markStyle {
        padding: 0px 30px;
        width: calc(100% - 60px);
        height: 45px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        position: fixed;
        z-index: 100;

        background-color: #1f1f1f;
        border-bottom: 2px solid #222222;

        .left {
            display: flex;
            align-items: center;
            gap: 10px;
            p {
                font-size: 14px;
                color: white;
                font-weight: 600;

                span {
                    color: #5d5e61;
                    font-size: 12px;
                }
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
                width: 20px;
                height: 20px;

                display: flex;
                justify-content: center;
                align-items: center;

                border-radius: 50%;

                cursor: pointer;

            }
            
            .minimize {
                background-color: #3c3d3f;
            }

            .maximize {
                background-color: #5d5e61;
            }
        }

    }

    .container_main {
        margin-top: 30px;
        padding: 36px 21px;
        width: calc(100vw - 42px);
        height: calc(100vh - 112px);

        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        background-color: ${(props) => props.theme.bgColorDark};

        .content_main {
            padding: 0px 22px;
            width: calc(100% - 44px);
            height: 100%;
            
            overflow-y: auto;

            .content_display {
                width: 100%;
                height: calc(100% - 35px);

                display: flex;
                flex-direction: column;

                .card-manager {
                    padding-bottom: 20px;
                    margin-bottom: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;

                    position: sticky;
                    top: 55px;

                    background-color: #0F1012;
                }
            }
        }
    }

    footer {
        width: 100%;
        height: 1px;

        position: absolute;
        bottom: 0px;

        background-color: #424242;

        animation: footer 2s;
    }

    @keyframes footer {
        from {
            width: 0%;
        }

        to {
            width: 100%;
            background-color: #33996B;
        }
    }

`;