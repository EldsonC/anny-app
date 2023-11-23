import styled from "styled-components";

export const HeaderMainStyle = styled.header `
    padding-bottom: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0px;

    background: rgba(13, 13, 13, 0.65);
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
    
                    background-color: #141414;
                    border: 1px solid #292929;
                    border-radius: 11px;
    
                    cursor: pointer;
    
                    .down {
                        display: flex;
                        gap: 5px;
                    }
                    p {
                        font-size: 0.875rem;
                        font-weight: 400;
                        color: #B3B3B3;
                    }
                }
            }
        }
    }

`;