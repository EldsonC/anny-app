import styled from "styled-components";

export const BreadCrumbStyle = styled.div `
    margin-top: 46px;
    width: 100%;
    display: flex;
    justify-content: space-between;


    .left_ {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;

        button {
            width: 40px;
            height: 40px;

            border-radius: 50%;
            background-color: #1D1E20;

            cursor: pointer;
        }

        p {
            font-weight: 500;
            color: #FFFFFF;
        }
    }
`;