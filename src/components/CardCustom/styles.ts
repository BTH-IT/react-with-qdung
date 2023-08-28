import { Card } from "antd";
import styled from "styled-components";

export const CardCustomWrapper = styled(Card)`
  background: #3d2942;
  border-radius: 0px;
`;

export const CardImage = styled.div<{ hovered: boolean }>`
  width: 100%;
  height: 250px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 50px;
    width: 80%;
    visibility: hidden;
    opacity: 0;
  }

  &:hover > button {
    visibility: visible;
    opacity: 1;
  }
`;

export const CardTimeTag = styled.div`
  opacity: 0.95;
  background: linear-gradient(
    135deg,
    #8613a5 0%,
    rgba(250, 250, 250, 0.55) 100%
  );
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(22.5px);
  color: white;
  position: absolute;
  padding: 10px 20px;
  bottom: 0;
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CardInfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CardInfoContentText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  h3 {
    font-size: 1.1rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 300;
    color: #bdaac1;
  }
`;

export const CardInfoAction = styled.div`
  display: flex;
  align-items: center;
  color: #76607a;
  gap: 6px;
  font-size: 1.1rem;
`;

export const CardETH = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  h3 {
    font-size: 0.8rem;
    color: #bdaac1;
    font-weight: 300;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }
`;
