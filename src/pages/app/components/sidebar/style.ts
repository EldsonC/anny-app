import styled from "styled-components";

export const SideBarStyle = styled.aside `
    width: 70px;
    min-width: 70px;

    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 17px;
    background-color: #1A1A1A;
    border: 1px solid #292929;

    /* Globals */
        .width {
            width: 100%;
        }

        .hight {
            height: 58px;
        }

        .center {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .border {
            border-bottom: 1px solid #1F1F1F;
        }
        
        .cursor {
            cursor: pointer;
        }

        .color {
            background-color: #010101;
        }

    /* Code */

    .top_side {
        display: flex;
        flex-direction: column;

        .header_side {
            height: 71px;

            background-color: #191919;
            border-radius: 15.5px 15.5px 0px 0px;
        }

        .search_side {
            height: 58px;
            background-color: #121212;
        }
    }

    .bottom_side {
        padding-bottom: 21px;

        button {
            width: 44px;
            height: 44px;

            background-color: #33996B;
            border-radius: 7px;
        }
    }
`;