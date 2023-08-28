import { styled } from "styled-components";

export const FooterWrapper = styled.footer`
  color: white;
  background: #251928;
  padding: 50px 0;
`;

export const FooterLogo = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  gap: 20px;
  color: #96839b;
  line-height: 2;
`;

export const FooterLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLeftSocial = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FooterRightTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;
export const FooterRightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #96839b;
`;
