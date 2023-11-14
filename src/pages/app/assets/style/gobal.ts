import styled from "styled-components";

export const MainStyle = styled.main `
    width:  100vw;

    display: flex;
    flex-direction: column;

    /* overflow: hidden; */

    .container_main {
        width: 100vw;
        height: calc(100vh - 60px);

        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .content_main {
            padding-top: 0rem;
            padding-bottom: 1.5rem;
            padding-left: 3rem;
            padding-right: 3rem;
            width: calc(100% - 6rem);
            height: calc(100% - 3rem);

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