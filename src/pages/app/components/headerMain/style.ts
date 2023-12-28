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

    background: #111111;
    backdrop-filter: blur(2px);

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
                    padding: 12px 14px;
    
                    display: flex;
                    align-items: center;
                    gap: 0.62rem;
    
                    background-color: ${(props: ThemeProps) => props.theme.colorBgDark};
                    border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};
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
                }
            }
        }
    }

`;