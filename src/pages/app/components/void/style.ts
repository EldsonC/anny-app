import styled from "styled-components";

interface ThemeProps {
    theme: {
        bgColorDark?: string;
        bgDarkBlur?: string;
        colorText?: string
        colorDestaque?: string;
        colorBgDark?: string;
        destaqueDark?: string;
        colorBorderDark?: string;

        colorBtnBg?: string;
        searchSideBg?: string;
        
        isActiveColor?: string;
    };
}

export const VoidStyle = styled.div `
    margin-top: 20px;
    width: 100%;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    background-color: ${(props: ThemeProps) => props.theme.colorBgDark};
    border-radius: 10px;
    border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};

    h3 {
        font-size: 14px;
        color: #919191;
    }

    .description {
        max-width: 400px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #919191;
        text-align: center;
    }

    .btns {
        display: flex;
        gap: 10px;
    }
`;