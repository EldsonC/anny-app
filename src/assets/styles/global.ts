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

    body::-webkit-scrollbar {
        width: 5px;
    }

    body::-webkit-scrollbar-track {
        background: #151515;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #4D4D4D;
        border-radius: 5px;
        border: 3px solid #4D4D4D;
    }
`;