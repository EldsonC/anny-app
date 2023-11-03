import styled from "styled-components";

export const LoginStyle = styled.main `
    margin-top: 60px;
    .content_main {
        margin: 0 auto;
        max-width: calc(100% - 46px);
        width: 74.875rem;
        height: auto;

        border-left: 1px solid #141414;
        border-right: 1px solid #141414;

        display: flex;
        flex-direction: column;

        section {
            width: 100%;
            height: auto;
        }

        .hiro {
            margin-top: 4.563rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            .tag {
                margin-bottom: 23px;
                padding: 5px 18px;
                display: flex;
                align-items: center;
                gap: 8px;

                background-color: #151515;
                border-radius: 34px;
                border: 1px solid #242424;

                p {
                    margin: 0px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #AEAEAE;
                }

                z-index: 1000;
            }

            h1 {
                margin-bottom: 25px;
                max-width: 64.125rem;
                font-size: 60px;
                font-weight: 500;

                background: linear-gradient(90deg, #EEEEEF 0%, rgba(238, 238, 239, 0.58) 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-align: center;

                z-index: 1000;
            }

            p {
                margin-bottom: 22px;
                max-width: 366px;
                font-size: 16px;
                font-weight: 500;
                color: #AEAEAE;

                text-align: center;

                z-index: 1000;
            }

            .buttons_login {
                display: flex;
                gap: 12px;

                button {
                    width: 150px;
                    height: 40px;

                    border-radius: 12px;
                    border: 1px solid #4D4D4D;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 9px;
                    background-color: transparent;

                    p {
                        margin-bottom: 0px;
                        font-size: 14px;
                        font-weight: 500;
                        color: #4D4D4D;
                    }

                    cursor: pointer;
                }
            }

            .divider {
                margin: 27px 0px;
                display: flex;
                align-items: center;
                gap: 10px;

                span {
                    width: 135px;
                    height: 1px;
                    background-color: #1F1F1F;
                }

                p {
                    margin-bottom: 0px;
                    font-size: 14px;
                    color: #4D4D4D;
                }
            }

            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 11px;

                input {
                    padding: 0px 23px;
                    width: calc(312px - 46px);
                    height: 40px;

                    border-radius: 5px;
                    border: 1px solid #1C1C1C;
                    color: #4D4D4D;

                    background-color: #111111;

                    &:focus {
                        border-color: #4D4D4D;
                    }
                }

                a {
                    margin-top: 19px;
                    margin-bottom: 30px;
                    color: #5E5E5E;
                    font-size: 14px;
                    font-weight: 500;
                }

                .btn_login {
                    width: 312px;
                    height: 45px;
    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
    
                    border-radius: 5px;
                    background: #33996B;
    
                    p {
                        margin: 0px;
                        font-size: 14px;
                        font-weight: 400;
    
                        color: #fff;
                    }
    
                    cursor: pointer;
    
                    z-index: 1000;
                }
            }
        }
    }
`;