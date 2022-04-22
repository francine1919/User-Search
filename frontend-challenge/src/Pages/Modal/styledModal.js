import styled from "styled-components";

export const ContainerModal = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 540px;
  height: 500px;

  p {
    width: 350px;
    padding: 4px;
    margin-top: 4px;
    margin-left: 140px;
    margin-bottom: 0;
  }
  img {
    border-radius: 50%;
    width: 150px;
    z-index: 100;
    padding-bottom: 14px;
  }
  button {
    margin: 12px;
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #39739d;
    cursor: pointer;
    font-size: 13px;
    outline: none;
    padding: 8px 0.8em;
    position: relative;
    touch-action: manipulation;

    :hover {
      background-color: #b3d3ea;
      color: #2c5777;
    }
    :focus {
      box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
    }
  }
`;
