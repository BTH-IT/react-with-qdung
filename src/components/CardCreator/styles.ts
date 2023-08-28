import styled from "styled-components";

export const CardCreatorWrapper = styled.div`
  display: flex;
  color: white;
  width: 100%;
  height: 100%;
  background-color: #302034;
  padding: 20px;
  border-left: 1px solid red;
  justify-content: space-between;
  align-items: center;
`;

export const CardCreatorContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CardCreatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Oxanium";
  }

  span {
    font-size: 0.9rem;
    font-weight: 300;
    font-family: "Work Sans";
    color: #bdaac1;
  }
`;

export const CardCreatorTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-left: 2px solid #49374e;
  padding-left: 30px;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Oxanium";
  }

  span {
    font-size: 0.9rem;
    font-weight: 300;
    font-family: "Work Sans";
    color: #bdaac1;
  }
`;
