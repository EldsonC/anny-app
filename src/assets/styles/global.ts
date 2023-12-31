import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;

        border: none;
        outline: none;

        list-style: none;
        text-decoration: none;
    }

    :root {
        --bg-color-dark: #111111;
        --bg-dark-blur: rgba(13, 13, 13, 0.65);
        --color-text: #F2F2F2;
        --color-destaque: #33996B;
        --color-bg-dark: #1A1A1A;
        --destaque-dark: #141414;
        --color-border-dark: #292929;

        --grey-1: #F7F7F7;
        --grey-2: #151515;
    }

    body {
        background-color: #111;
        font-family: "Inter", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 5px;
        border: 3px solid transparent;
    }

    ::selection {
        background-color: #52d399; /* Cor de fundo da seleção */
        color: #333; /* Cor do texto selecionado */
    }
`;