import { Row } from "antd";
import { styled } from "styled-components";
export const LoadingWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowWrapper = styled(Row)`
  &.ant-row {
    width: 100%;
  }
`;
