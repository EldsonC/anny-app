import styled from "styled-components";

interface ThemeProps {
    theme: {
        bgDarkBlur?: string;
        colorText?: string
        colorBgDark?: string;
        colorBorderDark?: string;
    };
}

export const HeaderMainStyle = styled.header `
    padding-bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0px;

    z-index: 1000;

    background: #111111a4;
    backdrop-filter: blur(5px);

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        ul {
            display: flex;
            align-items: center;
            gap: 9px;
    
            li {
                display: flex;
                flex-direction: column;

                button {
                    padding: 0px 14px;
                    height: 41px;
                    display: flex;
                    align-items: center;
                    gap: 0.62rem;
    
                    background-color: ${(props: ThemeProps) => props.theme.colorBgDark};
                    border-radius: 11px;
    
                    cursor: pointer;
    
                    .down {
                        display: flex;
                        gap: 5px;
                    }
                    .rightbar {
                        rotate: 90deg;
                    }

                    p {
                        font-size: 0.875rem;
                        font-weight: 400;
                        color: ${(props: ThemeProps) => props.theme.colorText};
                    }

                    &:hover {
                        background-color: #33996B;
                    }
                }
            }
        }


        .left {
            padding: 5px 20px;
            background-color: #1A1A1A;
            border-radius: 10px;
            border: 1px solid #292929;

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
        }

        .right {
            padding: 5px 20px;
            background-color: #1A1A1A;
            border-radius: 10px;
            border: 1px solid #292929;
        }
    }

    @media screen and (max-width: 750px) {
        display: none;
    }

`;