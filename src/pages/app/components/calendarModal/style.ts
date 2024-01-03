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
    gap: 30px;

    animation: animationEmployee 0.5s;

    .container_form {
        width: auto;
        height: 540px;

        display: flex;
        gap: 10px;

        animation: animationEmployeeForm 0.5s;

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

        animation: animationEmployeeForm 1s;

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