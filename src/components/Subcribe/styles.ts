import { styled } from "styled-components";

export const SubcribeWrapper = styled.div`
  margin: 100px 0;
  background-image: url("https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/370309374_276923635097900_8821373189198940221_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VcgLH9UayWkAX8gzgH9&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdQT2zFV-WTWzSzl7m62ox9NLKeANsWeGvPHqxDCSF5CpA&oe=651442AF");
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 100px 0;
  position: relative;
  h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

export const SubcribeInput = styled.div`
  display: flex;

  & > button {
    padding: 20px 60px !important;
  }
`;
