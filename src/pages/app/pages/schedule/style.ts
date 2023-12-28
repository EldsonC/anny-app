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

export const Content = styled.div `
    .header {
        padding: 20px 0px;
        width: 100%;

        position: static;
        top: 50px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: ${(props: ThemeProps) => props.theme.bgColorDark};

        .left {
            display: flex;
            flex-direction: column;
            gap: 11px;
            .up {
                display: flex;
                align-items: center;
                gap: 15px;
    
                h3 {
                    font-size: 20px;
                    font-weight: 500;
                    color: ${(props: ThemeProps) => props.theme.colorText};
                }
    
                .users {
                    padding: 8px 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
    
                    background-color: #6D44E0;
                    border-radius: 50px;
    
                    cursor: pointer;
    
                    p {
                        font-size: 12px;
                        font-weight: 500;
                        color: #FFFFFF;
                    }
    
                }
    
                .done {
                    background-color: #33996B;
                    p {
    
                    }
                }
                .todo {
                    background-color: #3E3E3E;
                    p {
    
                    }
                } 
            }
    
            p {
                font-size: 16px;
                font-weight: 400;
                color: #8D8C8C;
            }
        }

        .search {
            width: calc(340px - 30px);
            height: 40px;
            border-radius: 10px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            background-color:  ${(props: ThemeProps) => props.theme.colorBgDark};
            border: 1px solid  ${(props: ThemeProps) => props.theme.colorBorderDark};


            .input {
                padding: 0px 10px;
                display: flex;
                align-items: center;

                input {
                    padding-left: 10px;
                    width: 100%;
                    height: calc(100% - 30px);
                    background-color: transparent;
                    color: #FFFFFF;
                }
            }

            .tip_search {
                width: 60px;
                min-width: 60px;
                height: 33px;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 6px;

                border-radius: 6px;
                background-color: #c7c7c7;

                cursor: pointer;

                p {
                    font-size: 16px;
                    font-weight: 600;
                    color: #000000;
                }
            }
        }
    }


    .container_cards {
        padding-top: 29px;
        width: 100%;
        height: auto;

        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`;