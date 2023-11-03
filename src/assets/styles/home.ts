import styled from "styled-components";

export const HomeStyle = styled.main `
    margin-top: 50px;
    .content_main {
        margin: 0 auto;
        max-width: calc(100% - 46px);
        width: 74.875rem;
        height: auto;

        border-left: 1px solid #1C1C1C;
        border-right: 1px solid #1C1C1C;

        display: flex;
        flex-direction: column;

        section {
            width: 100%;
            height: auto;
        }

        .light {
            display: none;
        }

        .hiro {
            margin-top: 4.563rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            .tag {
                margin-bottom: 23px;
                padding: 5px 18px;
                display: flex;
                align-items: center;
                gap: 8px;

                background-color: #151515;
                border-radius: 34px;
                border: 1px solid #242424;

                p {
                    margin: 0px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #AEAEAE;
                }

                z-index: 1000;
            }

            h1 {
                margin-bottom: 25px;
                max-width: 64.125rem;
                font-size: 60px;
                font-weight: 500;

                color: #EEEEEF;
                text-align: center;

                span {
                    color: #33996B;
                }

                z-index: 1000;
            }

            p {
                margin-bottom: 34px;
                max-width: 40.375rem;
                font-size: 16px;
                font-weight: 500;
                color: #AEAEAE;

                text-align: center;

                z-index: 1000;
            }

            .buttons-hiro {
                display: flex;
                gap: 20px;

                .login-hiro {
                    display: none;
                    border: 1px solid #4C4C4C;
                    background: transparent;
                    
                    p {
                        color: #AEAEAE;
                    }
                }

                .doc_btn {
                    background-color: #2E2E2E;
                    border: 1px solid #4D4D4D;
                }

                button {
                    margin-bottom: 100px;
                    padding: 8px 20px;
    
                    display: flex;
                    align-items: center;
                    gap: 10px;
    
                    border-radius: 5px;
                    background: #33996B;
    
                    p {
                        margin: 0px;
                        font-size: 14px;
                        font-weight: 400;
    
                        color: #fff;
                    }
    
                    cursor: pointer;
    
                    z-index: 1000;
                }
            }

            .images {

                img {
                    width: 64.625rem;
                    z-index: 500;
                }

                .iphone-mockup {
                    display: none;
                }
            }


        }

        .about {
            padding-top: 60px;
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
                margin-bottom: 33px;
                max-width: 59.5rem;
                font-size: 40px;
                font-weight: 500;

                color: #EEEEEF;
                text-align: center;

                z-index: 1000;
            }

            p {
                margin-bottom: 70px;
                max-width: 39.125rem;
                font-size: 16px;
                font-weight: 500;
                color: #AEAEAE;

                text-align: center;
            }

            .container_about_text {
                padding-bottom: 5.063rem;
                width: 64.625rem;
                max-width: 90%;
                display: flex;
                justify-content: space-between;

                p {
                    max-width: 31.688rem;
                    font-size: 16px;
                    font-weight: 500;
                    color: #AEAEAE;
                    text-align: start;
                }

                .p {
                    max-width: 25.938rem;
                }
            }

            .cards {
                padding-bottom: 34px;
                display: flex;
                gap: 15px;
                
                .card {
                    
                    padding: 23px 26px;
                    width: calc(335px - 52px);
                    height: calc(235px - 46px);

                    border-radius: 12px;
                    border: 1px solid #2E2B32;

                    background: rgba(23, 23, 23, 0.64);
                    backdrop-filter: blur(9.5px);

                    display: flex;
                    flex-direction: column;
                    gap: 13px;

                    .title {
                        font-size: 20px;
                        font-weight: 600;

                        background: linear-gradient(90deg, #EEEEEF 0%, rgba(238, 238, 239, 0.58) 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    p {
                        margin: 0;
                        text-align: start;

                        font-size: 14px;
                        font-weight: 500;
                        color: #AEAEAE;
                    }
                }
            }

            button {
                margin-bottom: 174px;
                padding: 8px 20px;

                display: flex;
                align-items: center;
                gap: 10px;

                border-radius: 5px;
                background: #33996B;

                p {
                    margin: 0px;
                    font-size: 14px;
                    font-weight: 400;

                    color: #fff;
                }

                cursor: pointer;

                z-index: 1000;
            }
        }

        .faqs {
            padding-top: 60px;
            margin-bottom: 194px;
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
                margin-bottom: 33px;
                max-width: 59.5rem;
                font-size: 40px;
                font-weight: 500;

                color: #EEEEEF;
                text-align: center;

                z-index: 1000;
            }

            p {
                margin-bottom: 70px;
                max-width: 39.125rem;
                font-size: 16px;
                font-weight: 500;
                color: #AEAEAE;

                text-align: center;
            }

            .cards_faqs {
                display: flex;
                flex-direction: column;
                gap: 20px;

                .card_faqs {
                    padding-left: 32px;
                    width: calc(736px - 64px) ;
                    height: 50px;

                    display: flex;
                    align-items: center;
                    background-color: #171717;

                    border-radius: 12px;
                    border: 1px solid #1D1D1D;

                    p {
                        margin: 0px;
                    }

                    cursor: pointer;

                }
            }

            .card_platform {
                width: 64.625rem;
                max-width: 90%;
                height: 23.813rem;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                border-radius: 12px;
                border: 1px solid #2E2B32;

                h2 {
                    margin-bottom: 33px;
                    max-width: 43rem;
                    font-size: 40px;
                    font-weight: 500;

                    color: #EEEEEF;
                    text-align: center;

                    z-index: 1000;
                }

                p {
                    max-width: 39.125rem;
                    margin-bottom: 31px;
                }

                .platforms {
                    display: flex;
                    gap: 37px;
                }
            }
        }

        .plans {
            padding-top: 60px;
            margin-bottom: 277px;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            h2 {
                margin-bottom: 25px;
                max-width: 43rem;
                font-size: 40px;
                font-weight: 500;

                color: #EEEEEF;
                text-align: center;

                z-index: 1000;
            }

            p {
                margin-bottom: 70px;
                max-width: 39.125rem;
                font-size: 16px;
                font-weight: 500;
                color: #AEAEAE;

                text-align: center;
            }

            img {
                position: absolute;
            }

            .card_plan {
                display: flex;
                align-items: flex-end;
                gap: 15px;

                z-index: 1000;

                .card {
                    padding: 16px 26px;
                    width: calc(335px - 52px);
                    height: calc(559px - 32px);

                    border-radius: 12px;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;

                    background-color: #171717;

                    .text_plan {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;

                        .header_plan {
                            margin-bottom: 26px;
                            padding: 10px 22px;
                            border-radius: 12px;
    
                            background-color: #33996B;
    
                            p {
                                font-size: 14px;
                                margin: 0px;
                                color: #F7F7F7;
                            }

                        }

                        .description {
                            margin-bottom: 27px;
                            text-align: start;
                            font-weight: 400;
                            color: #666;
                        }

                        .price {
                            margin-bottom: 27px;
                            display: flex;
                            align-items: baseline;
                            gap: 4px;

                            color: #F7F7F7;
                            font-size: 30px;

                            .size_date {
                                margin: 0px;
                                font-size: 16px;
                                color: #666;
                            }
                        }

                        .container_tips {
                            display: flex;
                            flex-direction: column;
                            gap: 15px;

                            .tip {
                                display: flex;
                                align-items: center;
                                gap: 10px;

                                p {
                                    margin: 0px;
                                    color: #F7F7F7;
                                }
                            }
                        }

                    }
                    button {
                        width: 100%;
                        height: 40px;

                        border-radius: 5px;
                        background-color: #2E2E2E;
                        border: 1px solid #4D4D4D;
                        color: #AEAEAE;

                        cursor: pointer;
                    }

                    .pro {
                        border: 1px solid #33996B;
                        background-color: #33996B;
                        color: #fff;
                    }

                }

                .hight_card {
                    height: calc(603px - 32px);
                }
            }
        }
    }

    footer {
        width: 100%;
        height: 512px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: #171717;
        border-bottom: 5px solid #33996B;

        .logos {
            display: flex;
            gap: 83px;
        }

        h3 {
            margin-top: 45px;
            margin-bottom: 25px;
            max-width: 469px;
            font-size: 30px;
            font-weight: 500;

            color: #EEEEEF;
            text-align: center;

            z-index: 1000;
        }

        .input_container {
            margin-bottom: 76px;
            display: flex;
            gap: 13px;

            .input {
                padding-left: 27px;
                width: 333px;
                height: 45px;

                display: flex;
                align-items: center;
                gap: 13px;

                border-radius: 10px;
                border: 1px solid #4D4D4D;

                background: #151515;

                input {
                    height: 100%;
                    background-color: transparent;
                    color: #F7F7F7;
                }
            }

            button {
                width: 107px;
                height: 45px;

                border-radius: 10px;
                background-color: #33996B;
                color: #E4E4E4;

                cursor: pointer;
            }
        }

        ul {
            display: flex;
            gap: 44px;

            li {
                font-size: 14px;
                font-weight: 500;
                color: #fff;

                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 710px) {
        .content_main {
            .hiro {
                align-items: flex-start;

                h1 {
                    font-size: 45px;
                    text-align: start;
                }

                p {
                    font-size: 18px;
                    text-align: start;
                }

                .buttons-hiro {
                    .login-hiro {
                        display: flex;
                    }

                    .doc_btn {
                        display: none;
                    }
                }

                .images {
                    width: 100%;
                    display: flex;
                    justify-content: center;

                    img {
                        position: relative;
                        bottom: 135px;
                        width: 400px;
                    }
                    .pc-mockup {
                        display: none;
                    }

                    .iphone-mockup {
                        display: flex;
                    }
                }

            }

            .about {
                align-items: flex-start;

                h2 {
                    font-size: 40px;
                    text-align: start;
                }

                p {
                    font-size: 18px;
                    text-align: start;
                }

                .cards {
                    width: 100%;
                    
                    flex-direction: column;
                    align-items: center;

                    .card {
                        width: calc(100% - 52px);
                    }
                }

                button {
                    margin-bottom: 106px;
                }
            }

            .faqs {
                margin-bottom: 99px;
                h2 {
                    margin-bottom: 16px;
                    font-size: 40px;
                }

                p {
                    margin-bottom: 24px;
                    font-size: 18px;
                    max-width: 326px;
                }

                .cards_faqs {
                    width: 100%;
                    align-items: center;

                    .card_faqs {
                        width: calc(100% - 32px);

                        p {
                            font-size: 14px;
                        }
                    }
                }

                .card_platform {
                    width: 100%;

                    h2 {
                        max-width: 350px;
                        font-size: 17px;
                    }

                    p {
                        max-width: 300px;
                        font-size: 12px;
                    }

                    .platforms {
                        gap: 20px;
                    }
                }
            }

            .plans {
                margin-bottom: 90px;
                img {
                    width: calc(100% - 64px);
                }
                h2 {
                    font-size: 40px;
                }

                p {
                    font-size: 18px;
                }

                .card_plan {
                    width: 100%;
                    flex-direction: column;

                    .card {
                        width: calc(100% - 52px);
                        height: auto;

                        .text_plan {
                            .container_tips {
                                padding-bottom: 50px;
                            }
                        }
                    }
                }
            }
        }

        footer {
            padding: 40px 0px;
            height: auto;
            .input_container {
                flex-direction: column;
                align-items: center;
            }

            ul {
                flex-direction: column;
                align-items: center;
                gap: 15px;
            }
        }
    }

    @media screen and (max-width: 1040px) {
        .content_main {
            .about {
                .cards {
                    flex-direction: column;
                    align-items: center;
                }
            }

            .faqs {

            }

            .plans {
                .card_plan {
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }
        }
    
    }
    @media screen and (max-width: 1066px) {
        .content_main {
            .hiro {
                .images {
                    img {
                        bottom: 150px;
                    }
                    .pc-mockup {
                        width: 900px;
                    }
                }
            }
        }
    
    }

    @media screen and (max-width: 918px) {
        .content_main {
            .hiro {
                .images {
                    img {
                        bottom: 130px;
                    }
                    .pc-mockup {
                        width: 800px;
                    }
                }
            }
        }
    
    }

    @media screen and (max-width: 811px) {
        .content_main {
            .hiro {
                .images {
                    img {
                        bottom: 100px;
                    }
                    .pc-mockup {
                        width: 700px;
                    }
                }
            }
        }
    
    }

    @media screen and (max-width: 600px) {
        .content_main {
            .hiro {
                .images {
                    img {
                        bottom: 80px;
                    }
                    .pc-mockup {
                        width: 500px;
                    }
                }
            }
        }
    
    }
`;