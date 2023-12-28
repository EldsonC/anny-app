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
    padding: 0px 15px;
    width: 350px;
    height: auto;
    min-height: 60px;

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    animation: notify 0.5s;

    z-index: 2500;

    border-radius: 5px;
    border: 1px solid  ${(props: ThemeProps) => props.theme.colorBorderDark};
    background-color:  ${(props: ThemeProps) => props.theme.colorBgDark};

    .notify_container {
        padding: 10px 0px;
        display: flex;
        align-items: center;
        gap: 20px;

        .square {
            width: 30px;
            height: 30px;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 10px;

            img {
                width: 100%;
                height: 100%;

                border-radius: 10px;
                object-fit: cover;
            }
        }

        .data_notify {
            display: flex;
            flex-direction: column;
            gap: 5px;
            h4 {
                font-size: 14px;
                color: white;
            }

            p {
                font-size: 12px;
                color: white;
            }
        }
    }

    .close {
        padding: 10px 0px;

        button {
            background-color: transparent;
            cursor: pointer;
        }
    }

    &.removeNotify {
        animation: notifyRemove 0.5s forwards;
    }

    @keyframes notify {
        from {
            opacity: 0;
            transform: translateX(350px);
        }

        to {
            opacity: 1;
        }
    }

    @keyframes notifyRemove {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
            transform: translateX(350px);
        }
    }
`;