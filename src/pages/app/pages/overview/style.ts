import styled from "styled-components";

export const Content = styled.div `
    section {
        margin-bottom: 64px;
        width: 100%;
    }

    .value_section {
        margin-top: 28px;

        .banner {
            margin-top: 46px;
            margin-bottom: 46px;
            width: 100%;
            height: 244px;

            border: 1px solid #2B2B2B;
            border-radius: 10px;
        }
        h3 {
            font-size: 16px;
            font-weight: 600;
            color: #949494;
        }

        .content_data {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            h1 {
                margin-top: 6px;
                font-weight: 600;
                font-size: 40px;
                color: #FFFFFF;
                
                .divider {
                    color: #107940;
                }
    
                .convert_value {
                    color: #6CEBA6;
                }
            }
        }


        .content_pa {
            margin-top: 27px;
            display: flex;
            align-items: center;
            gap: 10px;

            p {
                margin: 0px;
                font-size: 14px;
                font-weight: 600;
                color: #6CEBA6;
            }
        }

        p {
            max-width: 701px;
            margin-top: 16px;
            font-size: 14px;
            color: #6E6E6E;

            span {
                color: #FFFFFF;
            }
        }
    }

    .transaction_section {
        .content_p {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                font-size: 14px;
                font-weight: 600;
                color: #6CEBA6;
            }
        }

        .content_chart {
            width: 100%;
            height: 400px;

            #myChart {
                width: 100%;
                height: 100%;
            }
        }

        .container_cards {
            margin-top: 15px;
            width: 100%;
        }
    }

    @media screen and (max-width: 720px) {
        .value_section {
            margin-top: 28px;

            h3 {
                margin-bottom: 14px;
                font-size: 16px;
                font-weight: 600;
                color: #949494;
            }

            .content_data {
                display: flex;
                flex-direction: column-reverse;
                align-items: flex-start;
                gap: 14px;

                h1 {
                    margin-top: 6px;
                    font-weight: 600;
                    font-size: 40px;
                    color: #FFFFFF;
                    
                    .divider {
                        color: #107940;
                    }
        
                    .convert_value {
                        color: #6CEBA6;
                    }
                }
            }


            .content_p {
                margin-top: 27px;
                display: flex;
                align-items: center;
                gap: 10px;

                p {
                    font-size: 14px;
                    font-weight: 600;
                    color: #6CEBA6;
                }
            }

            p {
                max-width: 701px;
                margin-top: 16px;
                font-size: 14px;
                color: #6E6E6E;

                span {
                    color: #FFFFFF;
                }
            }
        }
    }
`;