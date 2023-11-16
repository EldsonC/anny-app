import styled from "styled-components";

export const FloatSidebarStyle = styled.div `
    padding-top: 20px;
    display: none;

    .button_side {
        margin-left: 16px;
        width: 50px;
        height: 50px;

        position: fixed;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #1D1E20;
        border: 1px solid #2B2B2B;
        border-radius: 15px;

        cursor: pointer;
    }

    @media screen and (max-width: 1050px) {
        display: flex;
    }
`;

export const SideBarStyle = styled.aside `
    padding: 1.12rem 0.75rem;
    width: calc(15.625rem - 1.5rem) ;
    min-width: calc(15.625rem - 1.5rem);
    height: calc(100% - 2.5rem);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #191919;
    border-radius: 0rem 0.3125rem 0.3125rem 0rem;
    border-right: 1px solid #282A2D;

    header {
        margin-bottom: 2rem;
        padding-bottom: 0.75rem;
        width: 100%;
        display: flex;

        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #282A2D;

        button {
            background-color: transparent;
            cursor: pointer;
        }
    }

    nav {
        display: flex;
        flex-direction: column;

        .container_ {
            margin-bottom: 1.87rem;
            h3 {
                margin-bottom: 1.69rem;
                font-size: 0.875rem;
                font-weight: 600;
                color: #6B6B6B;
            }
    
            ul {
                width: 100%;
                display: flex;
                flex-direction: column;

                border-left: 2px solid #2b2b2b;
    
                .li-base {
                    padding-left: 1rem;
                    padding-top: 0.69rem;
                    padding-bottom: 0.69rem;
                    width: calc(100% - 1rem);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;

                    border-left: 2px solid #FBFBFB;

                    cursor: pointer;
    
                    p {
                        font-size: 12px;
                        font-weight: 500;
                        color: #FBFBFB;
                    }
                }

                .li-none {
                    padding-left: 1rem;
                    padding-top: 0.69rem;
                    padding-bottom: 0.69rem;
                    width: calc(100% - 1rem);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;

                    border-left: 2px solid transparent;


                    cursor: pointer;
    
                    p {
                        font-size: 12px;
                        font-weight: 500;
                        color: #A5A5A5;
                    }
                }
            }
        }

    }

    @media screen and (max-width: 1050px) {
        display: none;
    }
`;