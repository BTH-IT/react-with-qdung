import { Card } from "antd";
import styled from "styled-components";

export const ThumbnailWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: end;
  gap: 20px;
  max-width: 1367px;
  margin: 0 auto;
  position: relative;
`;

export const ThumbnailRight = styled.div`
  height: 80%;
  width: 100%;
  max-width: 750px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: "Oxanium", cursive;
  flex-shrink: 0;
`;

export const ThumbnailRightTitle = styled.div`
  font-size: 5.1rem;
  font-weight: 600;
  color: white;
  line-height: 1.5;

  span {
    color: #ffce4e;
  }
`;

export const ThumbnailRightCell = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  gap: 6px;
  h2 {
    font-family: "Oxanium", cursive;
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
    color: #9b9e9a;
    margin-left: 8px;
    font-family: "Oxanium", cursive;
  }
`;

export const ThumbnailRightButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 60px;
`;

export const ThumbnailLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThumbnailLeftCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const ThumbnailLeftCardContent = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
  }
`;

export const CardCustom = styled(Card)`
  position: relative;
`;

export const ThumbnailLeftCardSale = styled.div`
  position: absolute;
  opacity: 0.95;
  background: linear-gradient(
    145deg,
    rgba(255, 137, 61, 0.09) 0%,
    rgba(250, 250, 250, 0.9) 100%
  );
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(22.5px);
  top: 10px;
  width: 90%;
  padding: 10px 20px;
  color: white;
  transform: translateX(-50%);
  left: 50%;
`;

export const ThumbnailLeftCardSaleContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  p {
    font-family: "Oxanium", cursive !important;
    font-size: 0.8rem;
    font-weight: 300;
  }

  span {
    font-family: "Oxanium", cursive !important;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
