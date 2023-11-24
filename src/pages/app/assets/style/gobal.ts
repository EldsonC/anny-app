import styled from "styled-components";

export const MainStyle = styled.main `
    width:  100vw;

    display: flex;
    flex-direction: column;

    
    .container_main {
        padding: 36px 21px;
        width: calc(100vw - 42px);
        height: calc(100vh - 72px);

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

`;