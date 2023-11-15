import styled from "styled-components";

export const CardStyle = styled.div `
    padding: 13px 16px;
    width: calc(323px - 32px);
    height: calc(246px - 26px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #1D1E20;
    border-radius: 10px;
    border: 1px solid #2B2B2B;

    .top {
        header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
    
            .left {
                display: flex;
                align-items: center;
                gap: 16px;
    
                .number {
                    width: 45px;
                    height: 45px;
    
                    display: flex;
                    justify-content: center;
                    align-items: center;
    
                    border-radius: 50%;
                    background-color: #27282B;
    
                    p {
                        font-size: 14px;
                        font-weight: 600;
                        color: #FFFFFF;
    
                    }
                }
    
                .data-client {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    h4 {
                        font-size: 16px;
                        font-weight: 500;
                        color: #FFFFFF;
                    }
    
                    p {
                        font-size: 14px;
                        font-weight: 500;
                        color: #6E6E6E;
                    }
                }
            }
        }
    }

    button {
        width: 100%;
        height: 34px;

        border-radius: 5px;
        border: 1px solid #4D4D4D;
        background-color: #2E2E2E;

        cursor: pointer;

        font-size: 12px;
        font-weight: 500;
        color: #AEAEAE;
    }
`;