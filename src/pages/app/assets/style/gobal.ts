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
            height: calc(100% - 3rem) ;
           
        }
    }

`;