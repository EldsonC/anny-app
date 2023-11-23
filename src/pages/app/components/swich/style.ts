import styled from "styled-components";

export const SwitchStyle = styled.label `
    position: relative;
    display: inline-block;
    width: 46px;
    height: 24px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 40px;


        &::before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 4px;
            bottom: 3px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 50%;

        }
    }

    input:checked + .slider {
        background-color: #33996B;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #33996B;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(21px);
        -ms-transform: translateX(21px);
        transform: translateX(21px);
    }
`;