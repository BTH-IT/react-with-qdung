import styled from "styled-components";

export const ThumbnailWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  gap: 20px;
`;

export const ThumbnailRight = styled.div``;

export const ThumbnailRightButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const ThumbnailLeft = styled.div``;

export const Blur = styled.div`
  width: 600px;
  height: 100%;
  background: rgba(79, 70, 78, 0.45);
  backdrop-filter: blur(15px);
`;
