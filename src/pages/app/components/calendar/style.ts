import styled from "styled-components";

export const CalendarStyle = styled.div`
    padding-bottom: 30px;
    width: 100%;
    padding: 10px 20px;
    background-color: #1f1f1f;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;

        h2 {
            font-size: 19px;
            font-weight: 400;
            color: #dbdbdb;
        }

        .btns {
            display: flex;
            align-items: center;
            gap: 10px;

            button {
                padding: 5px 10px;
                border-radius: 5px;

                background-color: #2E2E2E;
                border: 1px solid #4D4D4D;

                cursor: pointer;
            }

            .left {
                .icon {
                    rotate: 90deg;
                }
            }

            .right {
                .icon {
                    rotate: -90deg;
                }
            }
        }
    }

    .same_day {
        padding: 5px 10px;
        border-radius: 5px;

        color: white;
        background-color: #22d484;
        
    }

    table {
        width: 100%;
        border-collapse: collapse;
        color: #aaa;
    }

    th,
    td {
        text-align: center;
        padding: 20px 10px;
        border: none;
    }

    .current-month {
        background-color: transparent;
        color: white;
        border-radius: 10px;

        cursor: pointer;

        &:hover {
            background-color: #252525;
        }
    }

    .other-month {
        color: #696969;
    }
`;