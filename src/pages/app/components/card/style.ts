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

export const CardStyle = styled.div`
    padding: 0px 32px;
    width: calc(300px - 63px);
    max-height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;
    border: 1px solid  ${(props: ThemeProps) => props.theme.colorBorderDark};
    background-color:  ${(props: ThemeProps) => props.theme.colorBgDark};

    .card-null {
        padding: 0px 32px;
        width: calc(300px - 63px);
        height: 113px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .left_card {
            display: flex;
            align-items: center;
            .date {
                padding-right: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
        
                border-right: 1px solid  ${(props: ThemeProps) => props.theme.colorBorderDark};
        
                p {
                    font-size: 14px;
                    font-weight: 400;
                    color:  ${(props: ThemeProps) => props.theme.colorText};
                }
        
                h2 {
                    font-size: 30px;
                    font-weight: 400;
                    color: ${(props: ThemeProps) => props.theme.colorText};
                }
            }
        
            .data {
                padding-left: 20px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
        
                p {
                    font-size: 14px;
                    font-weight: 400;
                    color: ${(props: ThemeProps) => props.theme.colorText};
                }
    
                h4 {
                    white-space: nowrap;
                    overflow: hidden;
                    width: 100px;
                    text-overflow: ellipsis;
                    font-size: 16px;
                    font-weight: 400;
                    color: ${(props: ThemeProps) => props.theme.colorText};
                }
            }
        }
    
        .btns {
            display: flex;
            gap: 5px;
    
            button {
        
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
        
                width: 43px;
                height: 43px;
                
                border-radius: 11px;
                border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};
                background-color: ${(props: ThemeProps) => props.theme.colorBtnBg};
        
                cursor: pointer;
        
                p {
                    font-size: 14px;
                    font-weight: 400;
                    color: ${(props: ThemeProps) => props.theme.colorText};
                }
            }
        }
    }

    .expand-card {
        padding: 20px 0px;
        width: 300px;
        height: auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;

        animation: expand 1s;
        
        border-radius: 10px;
        border-bottom: 1px solid  ${(props: ThemeProps) => props.theme.colorBorderDark};
        background-color:  ${(props: ThemeProps) => props.theme.colorBgDark};

        .images {
            padding-left: 30px;
            width: calc(100% - 30px);
            display: flex;
            justify-content: center;

            z-index: 500;
            

            .image-1 {
                border: 2px solid ${(props: ThemeProps) => props.theme.colorBgDark};
            }

            .image-2 {
                position: relative;
                left: -30px;

                border: 2px solid ${(props: ThemeProps) => props.theme.colorBgDark};
            }
        }
        .details {
            color: white;
        }

        img {
            width: 60px;
            height: 60px;

            border-radius: 50%;
            object-fit: cover;
        }

        .buttons {
            display: flex;
            gap: 10px;
        }

    }

    @keyframes expand {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;