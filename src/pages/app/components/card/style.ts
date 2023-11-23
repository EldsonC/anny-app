import styled from "styled-components";

export const CardStyle = styled.div `
    padding: 0px 32px;
    width: calc(504px - 63px);
    height: 113px;

    display: flex;
    align-items: center;

    border-radius: 18px;
    border: 1px solid #292929;
    background-color: #181818;

    &:hover {
        background-color: #141414;

        cursor: pointer;
    }

    .date {
        padding-right: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        border-right: 1px solid #292929;

        p {
            font-size: 14px;
            font-weight: 400;
            color: #EB4747;
        }

        h2 {
            font-size: 30px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }

    .data {
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        p {
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
        }

        h4 {
            font-size: 16px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }

    .employee {
        margin-left: 58px;
        width: 57px;
        height: 57px;

        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;

            object-fit: cover;
            border-radius: 50%;
        }
    }

    .btns {
        display: flex;
        gap: 5px;

        button {
    
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
    
            width: 91px;
            height: 43px;
            
            border-radius: 11px;
            border: 1px solid #292929;
            background-color: #141414;
    
            cursor: pointer;
    
            p {
                font-size: 14px;
                font-weight: 400;
                color: #B3B3B3;
            }
        }
    }

`;