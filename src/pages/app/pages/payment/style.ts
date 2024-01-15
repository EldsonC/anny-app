import styled from "styled-components";

export const Content = styled.div`
    width: 100%;

    td {
        p {
            padding-right: 10px;
            
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: default;
        }
    }

  .book-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .book-table th,
  .book-table td {
    border: 1px solid #292929;
    padding-left: 10px;
    text-align: left;
  }

  .book-table td {
    height: 40px;
    color: white;
  }

  .book-table th {
    padding: 10px 10px;
    background-color: #1A1A1A;
    font-weight: bold;
    color: white;

    position: sticky;
    top: 0px;
  }
`;