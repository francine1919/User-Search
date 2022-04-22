import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #4a4b4f;
`;
export const HeaderContainerTopSection = styled.div`
  height: 40px;
  background-color: #9eadba;
`;
export const HeaderContainerBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #f2f9fb;
  div {
    display: flex;
    margin: 0 10px;
    align-items: center;
    font-weight: bold;
  }
  img {
    margin: 0 10px;
    height: 60px;
  }
`;
export const ContainerTimestamp = styled.div`
  flex-direction: column;
  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin: 4px;
    font-weight: lighter;
    color: #9eadba;
     }
  img {
    margin-top: 6px;
    height: 50px;
    border-radius: 50%;
  }
`;
