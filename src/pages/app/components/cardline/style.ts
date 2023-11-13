import styled from "styled-components";

export const CardLineStyle = styled.div `
    padding: 6px 0;
    margin-bottom: 15px;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    .number {
        min-width: 50px;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        background-color: #1D1E20;

        p {
            font-size: 14px;
            font-weight: 600;
            color: #FFFFFF;
        }
    }

    .container-ca {
        width: 100%;
        display: flex;
        flex-direction: column;

        .container-top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
    
            .name {
                display: flex;
                flex-direction: column;
                gap: 6px;
        
                h4 {
                    font-size: 14px;
                    font-weight: 600;
                    color: #DBDBDB;
                }
            }
        
            .date {
                p {
                    font-size: 14px;
                    font-weight: 500;
                    color: #6E6E6E;
                }
            }
        
            .services {
                padding: 8px 16px;
        
                border-radius: 34px;
                background-color: #1F1F21;
        
                p {
                    font-size: 12px;
                    font-weight: 600;
                    color: #DBDBDB;
                }
            }
        
            .code {
                p {
                    font-size: 14px;
                    font-weight: 500;
                    color: #6CEBA6;
                }
            }
        
            .status {
                p {
                    font-size: 12px;
                    font-weight: 500;
                    color: #DBDBDB;
                }
            }
        }

        .content_bottom {
            margin-top: 6px;
            p {
                font-size: 12px;
                font-weight: 500;
                color: #6E6E6E;
            }
        }
    }
`;