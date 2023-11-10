import styled from "styled-components";

export const MainStyle = styled.main `
    width:  100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    .container_main {
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: space-between;

        .content_main {
            padding: 1.5rem 3rem;
            width: calc(68% - 6rem);
            height: calc(100% - 3rem);

            .content_display {
                width: 702px;
                height: calc(100% - 35px);

                display: flex;
                flex-direction: column;
            }
           
        }

        @media screen and (max-width: 1410px) {
            .content_main {
                padding: 1.5rem 2rem;
                width: calc(100% - 4rem);
                height: calc(100% - 3rem);

                .content_display {
                    width: 702px;
                    max-width: 100%;
                    height: calc(100% - 35px);

                    display: flex;
                    flex-direction: column;
                }
            
            }
        }
    }

`;