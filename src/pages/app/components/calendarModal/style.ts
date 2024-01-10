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
    gap: 30px;

    animation: animationEmployee 0.5s;

    .container_form {
        width: auto;
        height: 570px;

        display: flex;
        gap: 10px;

        animation: animationEmployeeForm 0.7s;

        .content {
            width: 600px;

            background-color: #131313;
            border: 1px solid #252525;
            border-radius: 10px;

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
                height: calc(100% - 60px);

                display: flex;
                flex-direction: row;
            }
        }
    }

    .settings {
        width: 400px;
        height: auto;

        animation: animationEmployeeForm 0.6s;

        background-color: #1f1f1f;
        border-radius: 10px;
        border: 1px solid #252525;

        header {
            padding: 0px 20px;
            width: calc(100% - 40px);
            height: 60px;

            background-color: #131313;

            display: flex;
            justify-content: flex-end;
            align-items: center;

            .buttons {
                display: flex;
                gap: 10px;
            }
        }

        .container_settings {
            padding: 10px 20px;
            width: calc(100% - 40px);
            height: auto;

            display: flex;
            flex-direction: column;
            justify-content: center;

            label {
                color: white;
                font-size: 14px;
                font-weight: 500;
            }

            .header {
                padding-bottom: 30px;
                padding-top: 20px;
                
                h4 {
                    font-size: 16px;
                    font-weight: 500;
                    color: white;
                }
            } 

            .switch_container {
                margin-bottom: 22px;
                padding-bottom: 22px;
                width: 100%;

                display: flex;
                justify-content: space-between;
                align-items: center;

                border-bottom: 1px solid #222222;

                &:nth-child(3) {
                    margin-bottom: 10px;
                    border-bottom: none;
                }

                .left_switch {
                    display: flex;
                    flex-direction: column;
                    gap: 7px;

                    h4 {
                        font-size: 14px;
                        font-weight: 500;
                        color: white;
                    }

                    p {
                        font-size: 14px;
                        font-weight: 500;
                        color: #7A7A7A;
                    }
                }
            }

            .container_hours {
                padding: 10px 0px;
                width: 100%;

                display: flex;
                flex-wrap: wrap;
                gap: 10px;

                .hour {
                    padding: 10px 20px;
                    color: white;
                    background-color: #1b1b1b;
                    border-radius: 5px;
                    border: 1px solid #333333;

                    cursor: pointer;
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