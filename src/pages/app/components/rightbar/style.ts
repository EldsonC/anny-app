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
export const RightBarStyle = styled.aside `
    width: 446px;
    min-width: 446px;
    height: 100%;

    border-radius: 17px;
    background-color: ${(props: ThemeProps) => props.theme.colorBgDark};
    border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};

    header {
        padding: 0px 27px;
        width: calc(100% - 54px);
        height: 157px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: var(--destaque-dark);
        border-radius: 17px 17px 0px 0px;

        .top_right {
            display: flex;
            justify-content: space-between;

            .userdata {
                padding-top: 32px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 13px;
    
                .profile_picture {
                    width: 65px;
                    height: 65px;
    
                    background-color: transparent;
                    border-radius: 8px;
                    border: 1px solid var(--color-border-dark);
                    
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 8px;
    
                        object-fit: cover;
                    }
                }
    
                .text_data_user {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
    
                    h4 {
                        font-size: 16px;
                        font-weight: 500;
                        color: #FFFFFF;
                    }
    
                    p {
                        font-size: 14px;
                        font-weight: 500;
                        color: #9E9E9E;
                    }
                }
            }
        
            .actions_header {
                padding-top: 33px;
                display: flex;
                gap: 10px;
    
                button {
                    width: 30px;
                    height: 30px;
    
                    display: flex;
                    justify-content: center;
                    align-items: center;
    
                    border-radius: 8px;
                    background-color: var(--color-bg-dark);
                    border: 1px solid #2E2E2E;
    
                    cursor: pointer;
                }
            }
        }

        ul {
            display: flex;
            gap: 15px;
            
            li {
                padding: 15px 0px;
                font-size: 14px;
                font-weight: 500;
                color: #7A7A7A;

                cursor: pointer;
            }
        }

    }
    .content_setting, .content_resources, .content_notifications, .content_app {
        display: none;
    }

    .content_setting {
        display: block;
    }

    li {
        cursor: pointer;
    }

    .selected {
        color: #33996B;
        border-bottom: 2px solid #33996B;
    }

    .content-body {
        padding: 30px 27px;
        width: calc(100% - 54px);
        height: auto;

        .header {
            padding-bottom: 30px;
            h4 {
                font-size: 16px;
                font-weight: 500;
                color: ${(props: ThemeProps) => props.theme.colorText};
            }
        } 

        .switch_container {
            margin-bottom: 22px;
            padding-bottom: 22px;
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;

            border-bottom: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};

            &:nth-child(3) {
                margin-bottom: 10px;
                border-bottom: none;
            }

            .left_switch {
                display: flex;
                flex-direction: column;
                gap: 7px;

                h4 {
                    font-size: 14px;
                    font-weight: 500;
                    color: ${(props: ThemeProps) => props.theme.colorText};
                }

                p {
                    font-size: 14px;
                    font-weight: 500;
                    color: #7A7A7A;
                }
            }
        }

        .container_card {
            margin-bottom: 22px;
            padding-bottom: 37px;
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 10px;

            border-bottom: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};

            .card_notified {
                width: 100%;
                height: 63px;

                background-color: ${(props: ThemeProps) => props.theme.colorBtnBg};
                border-radius: 10px;
                border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};
            }
        }
    }
`;