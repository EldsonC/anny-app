import styled from "styled-components";

export const StyleEmployeeModal = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0px;
    left: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1500;

    background-color: #0000009a;
    backdrop-filter: blur(5px);
    animation: animationEmployee 0.5s;

    .container_form {
        width: 500px;
        height: auto;

        border-radius: 10px;
        background-color: #131313;
        border: 1px solid #252525;

        animation: animationEmployeeForm 0.5s;


        header {
            padding: 0px 20px;
            width: calc(100% - 40px);
            height: 60px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            .buttons {
                display: flex;
                gap: 10px;
            }
        }

        .content_main {
            padding: 0;
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: row;

            .left_container {
                width: 100%;
                height: auto;

                background-color: #222222;
                border-radius: 0px 0px 10px 10px;
            }

            .hiro {
                padding: 60px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h1 {
                    margin-bottom: 10px;
                    max-width: 64.125rem;
                    font-size: 40px;
                    font-weight: 500;

                    color: #f7f7f7;

                    z-index: 1000;
                }

                p {
                    margin-bottom: 40px;
                    max-width: 366px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #AEAEAE;

                    text-align: center;

                    z-index: 1000;
                }

                .buttons_login {
                    width: calc(100% - 80px);
                    display: flex;
                    flex-direction: column;
                    gap: 12px;

                    .focu-login {
                        background-color: #2E2E2E;
                    }

                    button {
                        width: 100%;
                        height: 45px;

                        border-radius: 6px;
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
                            color: #f7f7f7;
                        }

                        cursor: pointer;
                    }
                }

                .divider {
                    width: calc(100% - 80px);
                    margin: 27px 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    span {
                        width: 45%;
                        height: 1px;
                        background-color: #3a3a3a;
                    }

                    p {
                        margin-bottom: 0px;
                        font-size: 14px;
                        color: #f7f7f7;
                    }
                }

                form {
                    width: calc(100% - 80px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 11px;

                    .input_container {
                        margin-bottom: 10px;
                        display: flex;
                        flex-direction: column;
                        gap: 15px;

                        width: 100%;

                        .label_container {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            
                            a {
                                margin: 0px;
                            }
                        }

                        label {
                            font-size: 14px;
                            color: #d3d0d0;
                        }
                        .input-eye {
                            padding-left: 23px;
                            padding-right: 10px;

                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            width: calc(100% - 33px);
                            height: 45px;
        
                            border-radius: 5px;
                            border: 1px solid #4D4D4D;
                            color: #4D4D4D;
        
                            background-color: #222222;

                            input {
                                padding: 0px;
                                background-color: transparent;
                                border: none;
                                height: 100%;
                            }

                            button {
                                display: flex;
                                
                                padding: 5px 7px;
                                border-radius: 5px;
                                background-color: transparent;
                                border: 1px solid #4D4D4D;

                                cursor: pointer;
                            }
                        }
                        .error_field {
                            background-color: #1F1315;
                            border: 1px solid #822025;
                            color: #802936;
                        } 
                        .error_label {
                            margin: 0px;
                            margin-bottom: 10px;
                            display: flex;

                            color: #c23d43;
                        }
                        input {
                            padding: 0px 23px;
                            width: calc(100% - 46px);
                            height: 45px;
        
                            border-radius: 5px;
                            border: 1px solid #4D4D4D;
                            color: #7a7878;
        
                            background-color: #222222;
        
                            &:focus {
                                border-color: #8d8d8d;
                            }
                        }
                    }


                    .code {
                        width: 40px;

                        input {
                            width: 100%;
                            padding: 0px;
                            text-align: center;
                            font-size: 18px;
                        }
                    }

                    .code-form {
                        display: flex;
                        gap: 20px;
                    }

                    a {
                        margin-top: 19px;
                        margin-bottom: 30px;
                        color: #5E5E5E;
                        font-size: 14px;
                        font-weight: 500;
                    }

                    .btn_login {
                        margin-top: 10px;
                        width: 100%;
                        height: 45px;
        
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
        
                        border-radius: 5px;
                        border: 1px solid #52d399;
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

                    .btn_disable {
                        background-color: #2E2E2E;
                        border-color: #4D4D4D;

                        cursor: default;
                    }

                    .create-acc {
                        margin-top: 20px;
                        color: #5E5E5E;
                        font-size: 14px;
                        font-weight: 500;

                        a {
                            color: #f7f7f7;
                            text-decoration: underline;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

    @keyframes animationEmployee {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes animationEmployeeForm {
        from {
            opacity: 0;
            transform: translateY(-500px);
        }

        to {
            opacity: 1;
        }
    }
`;