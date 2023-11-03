import styled from "styled-components";

export const HeaderStyle = styled.header `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    
    z-index: 1500;

    .container_header {
        margin-top: 10px;
        padding: 0px 23px;

        width: calc(74.875rem - 46px) ;
        max-width: calc(100% - 46px);
        height: 3.75rem;

        position: fixed;
        top: 23px;

        z-index: 1500;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 5px;

        background-color: var(--grey-2);
        box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.41);

        .left_container {
            display: flex;
            align-items: center;
            gap: 37px;

            ul {
                display: flex;
                gap: 1.125rem;
        
                li {
                    font-size: 14px;
                    font-weight: 400;
        
                    color: #F7F7F7;
                    cursor: pointer;
    
                    a {
                        color: #F7F7F7;
                    }
        
                    &:hover {
                        color: #F7F7F7;
                        transition: .5s;
                    }
                }
            }
        }

        
    
        .buttons {
            display: flex;
            flex-direction: row-reverse;
            gap: 12px;
    
            .btns_header {
                padding: 7px 17px;
                border-radius: 5px;
    
                font-size: 12px;
                font-weight: 500;
                color: #111;
    
                background-color: #33996B;
                border: 1px solid #33996B;
                color: #F7F7F7;
    
                cursor: pointer;
            }
    
            .void {
                background-color: #2E2E2E;
                border: 1px solid #4D4D4D;
                color: #F7F7F7;
                
            }
    
            .menu-hide {
                display: none;
                background-color: transparent;
                cursor: pointer;
            }
        } 
    }

    .full-size-header {
        width: calc(100% - 46px);
        border-bottom: 1px solid #42424277;
        border-radius: 0px;
        background: rgba(21, 21, 21, 0.49);
        backdrop-filter: blur(5.5px);
        top: 0px;
        animation: headerAnimation 1s ease-in-out forwards;
    }

    @keyframes headerAnimation {
        from {
            opacity: 0;
            margin-top: 10px;
            
        }

        to {
            opacity: 1;
            margin-top: 0px;
            top: 0px;
        }
    }

    @media screen and (max-width: 1210px) {
        .container_header {
            margin-top: 0px;
            max-width: calc(100% - 46px);

            top: 0px;
        }
    }

    @media screen and (max-width: 877px) {
        .container_header {
            margin-top: 0px;
            max-width: calc(100% - 46px);

            top: 0px;
            
            .buttons {
    
                .menu-hide {
                    display: flex;
                }
            }

            .left_container {
                .ul-hide {
                    display: none;
                }

            }
            .btn-hide {
                display: none;
            }
    
    
        }
    }
`;