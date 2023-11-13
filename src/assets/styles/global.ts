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
        --primary: #473376;
        --background-color: #111;
        
        --grey-1: #F7F7F7;
        --grey-2: #151515;
    }

    body {
        background-color: var(--background-color);
        font-family: "Inter", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #0c0c0c;
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 5px;
        border: 3px solid transparent;
    }
`;