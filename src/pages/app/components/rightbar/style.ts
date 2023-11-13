import styled from "styled-components";

export const RightBarStyle = styled.aside `
    width: 22.1875rem;
    min-width: 22.1875rem;
    height: calc(100vh - 3rem);

    background-color: #0F1012;
    border-left: 1px solid #2B2B2B;

    @media screen and (max-width: 1410px) {
        display: none;
    }
`;