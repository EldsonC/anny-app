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
export const MenuTeamstStyle = styled.div `
    padding: 8px 9px;
    padding-bottom: 15px;
    width: 227px;
    height: auto;

    position: absolute;
    top: 50px;

    z-index: 1000;
    
    background-color: ${(props: ThemeProps) => props.theme.colorBgDark};
    border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};
    border-radius: 10px;

    animation: MenuFloat .5s;

    .projects {
        padding-bottom: 21px;
        margin-bottom: 14px;
        width: 100%;

        border-bottom: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};

        .container_project {
            padding: 5px 15px;
            padding-top: 10px;
            padding-bottom: 15px;
            width: calc(100% - 30px);
            height: auto;

            display: flex;
            flex-direction: column;
            gap: 10px;

            background-color: ${(props: ThemeProps) => props.theme.colorBtnBg};
            border-radius: 9px;

            .button-show {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 40px;

                cursor: pointer;


                .left_icon {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    
                    .icon {
                        width: 40px;
                        height: 40px;
                        
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        
                        border-radius: 10px;
                        border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};
                        background-color: ${(props: ThemeProps) => props.theme.destaqueDark};

                        img {
                            width: 100%;
                            height: 100%;

                            object-fit: cover;
                            border-radius: 10px;
                        }
                    }

                    .color {
                        background-color: transparent;
                    }

                    p {
                        font-size: 14px;
                        font-weight: 400;
                        color: ${(props: ThemeProps) => props.theme.colorText};
                    }
                }
            }
        }
    }

    .button-add {
        padding:0px 15px;
        width: calc(100% - 30px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;

        cursor: pointer;

        .left_icon {
            display: flex;
            align-items: center;
            gap: 10px;

            .icon {
                width: 40px;
                height: 40px;

                display: flex;
                justify-content: center;
                align-items: center;

                border-radius: 10px;
                border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};
                background-color: #0A0A0A;
            }

            .color {
                background-color: #FFFFFF;
            }

            p {
                font-size: 14px;
                font-weight: 400;
                color: ${(props: ThemeProps) => props.theme.colorText};
            }
        }

        .left {
            transform: rotate(-90deg);
        }
    }

    @keyframes MenuFloat {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;