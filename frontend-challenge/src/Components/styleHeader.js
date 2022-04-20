import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #4a4b4f;
`;
export const HeaderContainerTopSection = styled.div`
  height: 32px;
  background-color: #9eadba;
`;
export const HeaderContainerBottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
