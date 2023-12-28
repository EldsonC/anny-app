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

export const NotifyStyle = styled.div `
    width: 350px;
    height: 90px;

    margin: 0 auto;

    position: fixed;
    top: 20px;
    right: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: notify 0.5s;

    z-index: 1000;

    border-radius: 5px;
    border: 1px solid  ${(props: ThemeProps) => props.theme.colorBorderDark};
    background-color:  ${(props: ThemeProps) => props.theme.colorBgDark};

    .notify_container {
        padding: 10px 0px;
        display: flex;
        align-items: center;
        gap: 20px;

        .square {
            width: 60px;
            height: 60px;
        }

        .data_notify {
            h4 {
                color: white;
            }
        }
    }

    .bar-time {
        width: 100%;
        height: 3px;

        animation: notifyTime 5s;

        background-color: ${(props: ThemeProps) => props.theme.colorDestaque};
        border-radius: 5px;

    }

    @keyframes notify {
        from {
            opacity: 0;
            right: -350px;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes notifyTime {
        from {
            opacity: 0;
            width: 100%;
        }

        to {
            opacity: 1;
            width: 0%;
        }
    }
`;