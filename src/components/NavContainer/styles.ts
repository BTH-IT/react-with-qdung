import styled from "styled-components";

interface StyledNavSidebarItemProps {
  isImageActive: boolean;
}

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const NavSidebar = styled.ul`
  grid-column: auto/span 3;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 1200px) {
    grid-column: auto/span 12;
  }
`;

export const NavImageContent = styled.div`
  grid-column: auto/span 9;
  padding-left: 60px;
  &.mobile {
    display: none;
  }

  a {
    text-decoration: none;
    display: block;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1200px) {
    display: none;

    &.mobile {
      padding-left: 0px;
      margin-top: 30px;
      display: block;
    }
  }
`;

export const NavSidebarItem = styled.li<StyledNavSidebarItemProps>`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) =>
    props.isImageActive ? "#f6f6f6" : "transparent"};

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: #f6f6f6;
  }
`;
