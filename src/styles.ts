import { styled } from "styled-components";
export const Blur = styled.div`
  width: 600px;
  height: 100%;
  position: absolute;
  background: rgba(79, 70, 78, 0.45);
  backdrop-filter: blur(15px);
  right: 0;
  top: 0;
  z-index: -1;
`;

export const ScrollDown = styled.div`
  width: 156px;
  height: 156px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% - 80px);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1360px;
  margin: 35px auto;
  padding: 100px 63px;
`;
