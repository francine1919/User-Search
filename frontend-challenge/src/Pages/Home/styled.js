import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #5d6572;
    input {
    width: 640px;
    padding: 12px;
    margin-bottom: 18px;
    border: 2px solid #ebeef1;
    background-image: url("https://img.icons8.com/office/26/000000/user.png");
    background-repeat: no-repeat;
    background-position: 630px 6px;
    touch-action: manipulation;
    :hover {
      background-color: #ecedef;
      border: 2px solid lightgray;
    }
    :focus {
      outline: 2px solid lightgray;
    }
  }
`;

export const ImageLoading = styled.img`
  display: block;
  margin: 0 auto;
  width: 20%;
`;
export const StyledTable = styled.table`
  margin: 0 auto;
  width: 50%;
  border-collapse: collapse;
    tbody {
    vertical-align: middle;
  }
  td,
  th {
    border: none;
    text-align: center;
  }
  td,
  th {
    border-bottom: 4px solid #b3d3ea;
  }

  td {
    padding: 0px 10px;
    height: 50px;
  }

  tr {
      :hover {
      background-color: #f2f9fb;
    }
  }
  thead {
    background-color: #b1e0e6;
    height: 50px;
  }
`;
export const ContainerButton = styled.button`
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  outline: none;
  padding: 8px 1em;
  position: relative;
  touch-action: manipulation;
  width: 60%;

  :hover {
    background-color: #b3d3ea;
    color: #2c5777;
  }
  :focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }
`;
