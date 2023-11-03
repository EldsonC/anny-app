import styled from "styled-components";

export const CookieStyle = styled.div `
    width: 100vw;
    
    position: fixed;
    bottom: 0px;

    display: flex;
    justify-content: center;

    border-top: 1px solid #1F1F1F;
    background: rgba(17, 17, 17, 0.90);
    backdrop-filter: blur(5.5px);

    animation: cookieAnimation 2s;

    z-index: 1500;

    .container_cookie {
        padding: 0px 32px;
        width: 79rem;
        height: 83px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .first_content {
            display: flex;
            align-items: center;
            gap: 35px;

            p {
                max-width: 637px;
                color: #B3B3B3;
            }
        }

        .second_content {
            display: flex;
            align-items: center;
            gap: 18px;
        }
    }

    @keyframes cookieAnimation {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 1053px) {
        .container_cookie {
            padding: 20px 0px;
            height: auto;
            flex-direction: column;
            gap: 20px;

            .first_content {
                flex-direction: column;
                gap: 10px;
                p {
                    max-width: 70%;
                    text-align: center;
                }
            }
        }
    }
`;