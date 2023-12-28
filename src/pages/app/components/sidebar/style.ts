import styled from "styled-components";

interface ThemeProps {
    theme: {
        bgColorDark?: string;
        bgDarkBlur?: string;
        colorText?: string
        colorDestaque?: string;
        colorBgDark?: string;
        destaqueDark?: string;
        colorBorderDark?: string;

        colorBtnBg?: string;
        searchSideBg?: string;
        
        isActiveColor?: string;
    };
}

export const SideBarStyle = styled.aside `
    width: 70px;
    min-width: 70px;

    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 17px;
    background-color: ${(props: ThemeProps) => props.theme.colorBgDark};
    border: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};

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
            border-bottom: 1px solid ${(props: ThemeProps) => props.theme.colorBorderDark};
        }
        
        .cursor {
            cursor: pointer;
        }

        .color {
            background-color: ${(props: ThemeProps) => props.theme.colorBtnBg};
        }

    /* Code */

    .top_side {
        display: flex;
        flex-direction: column;

        .header_side {
            height: 71px;

            background-color:#1f1f1f;
            border-radius: 15.5px 15.5px 0px 0px;
        }

        .search_side {
            height: 58px;
            background-color: ${(props: ThemeProps) => props.theme.searchSideBg};
        }
    }

    .bottom_side {
        padding-bottom: 21px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        .back {
            background-color: ${(props: ThemeProps) => props.theme.colorBtnBg};
        }

        button {
            width: 44px;
            height: 44px;

            background-color: #33996B;
            border-radius: 7px;
        }
    }
`;