import { styled } from "styled-components";

export const CategoriesWrapper = styled.div`
  padding: 60px 0;
  background: linear-gradient(346deg, #251928 0%, rgba(37, 25, 40, 0) 100%);
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  position: relative;
  display: inline-block;
  font-family: "Oxanium", cursive;

  img {
    position: absolute;
    left: 0;
    top: 50%;
    width: 55px;
    height: 55px;
    transform: translate(-50%, -50%);
    object-fit: cover;
    z-index: -1;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;
export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
