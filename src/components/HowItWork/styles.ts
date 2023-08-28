import styled from "styled-components";

export const HowItWorkWrapper = styled.section`
  max-width: 1360px;
  margin: 35px auto;
  padding-right: 63px;
  padding-left: 63px;
  position: relative;
`;

export const HowItWorkLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  display: flex;
  justify-content: center;
  gap: 175px;
  width: 100%;
  max-width: 1360px;
  left: 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  position: relative;
  font-family: "Oxanium", cursive;
  margin-bottom: 30px;
`;

export const HowItWorkContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  span {
    font-size: 1.1rem;
    font-weight: 500;
    color: #ffce4e;
  }
`;

export const HowItWorkIcon = styled.div`
  background-color: #372839;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
`;
