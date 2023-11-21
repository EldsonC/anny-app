import styled from "styled-components";

export const RightBarStyle = styled.aside `
    width: 446px;
    min-width: 446px;
    height: 100%;

    border-radius: 17px;
    background-color: #1A1A1A;
    border: 1px solid #292929;

    header {
        padding: 0px 27px;
        width: calc(100% - 54px);
        height: 157px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: #141414;
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
    
                    background-color: #FFFFFF;
                    border-radius: 8px;
                    
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
                    background-color: #141414;
                    border: 1px solid #2E2E2E;
    
                    cursor: pointer;
                }
            }
        }

        ul {
            display: flex;
            
            li {
                padding: 15px 15px;
                font-size: 14px;
                font-weight: 500;
                color: #7A7A7A;

                cursor: pointer;
            }

            :first-child {
                padding-left: 0px;
            }
        }
    }

`;