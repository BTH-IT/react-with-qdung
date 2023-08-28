import styled, { css } from "styled-components";
import { Button } from "antd";

export const Header = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1367px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  max-height: 66px;
`;

export const Logo = styled.div`
  width: 66px;
  height: 66px;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 160px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-height: 31px;
  gap: 40px;
`;

interface NavItemProps {
  active: boolean;
}

export const NavItemList = styled.li<NavItemProps>`
  padding: 8px 0;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ffce4e;
    color: #ffce4e;
  }

  ${(props) =>
    props.active
      ? css`
          border-color: #ffce4e;
          color: #ffce4e;
        `
      : ""}
`;
