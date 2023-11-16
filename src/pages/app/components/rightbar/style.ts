import styled from "styled-components";

export const RightBarStyle = styled.aside `
    padding: 21px 0px;
    width: calc(22.1875rem - 42px) ;
    min-width:calc(22.1875rem - 42px) ;
    height: calc(100vh - 42px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #0F1012;
    border-left: 1px solid #2B2B2B;

    .top {
        header {
            padding: 0px 21px;
            display: flex;
            justify-content: space-between;
            align-items: center;
    
            button {
                background-color: transparent;
            }
    
            span {
                font-size: 12px;
                font-weight: 500;
                color: #DBDBDB;
            }
        }
    
        .hiro_one {
            padding: 29px 21px;
    
            border-bottom: 1px solid #303030;
    
            h3 {
                font-size: 20px;
                font-weight: 600;
                color: #DBDBDB;
            }
    
        }
    
        .notify {
            padding: 29px 21px;
    
            .header_note {
                padding: 0px;
                padding-bottom: 28px;
                display: flex;
                justify-content: space-between;
                align-items: center;
    
                h3 {
                    font-size: 14px;
                    font-weight: 400;
                    color: #6B6B6B;
                }
            }
    
            .card_notify {
                padding: 20px 41px;
                display: flex;
                gap: 17px;
    
                border-bottom: 1px solid #303030;
                .noti {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    .type {
                        font-size: 12px;
                        font-weight: 500;
                        color: #C7C7C7;
                    }
    
                    h4 {
                        font-size: 12px;
                        font-weight: 500;
                        color: #FFFFFF;
                    }
    
                    p {
                        font-size: 10px;
                        font-weight: 500;
                        color: #696969;
                    }
                }
            }
    
        }
    }

    .bottom {
        padding: 0px 21px;

        button {
            width: 100%;
            height: 52px;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            background-color: #33996B;
            border-radius: 5px;
            color: #FBFBFB;

            cursor: pointer;
        }
    }

    @media screen and (max-width: 1410px) {
        display: none;
    }
`;