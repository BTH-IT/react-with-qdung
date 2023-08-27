import * as Styled from "./styles";
import LogoIcon from "../../assets/logo.svg";
import { Button } from "antd";
import { ButtonCustom } from "../../lib/antdCustom";

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo>
        <Styled.LogoImage src={LogoIcon} alt="logo" />
      </Styled.Logo>
      <Styled.Nav>
        <Styled.NavList>
          <Styled.NavItemList active={true}>Explore</Styled.NavItemList>
          <Styled.NavItemList active={false}>Creators</Styled.NavItemList>
          <Styled.NavItemList active={false}>Community</Styled.NavItemList>
        </Styled.NavList>
        <ButtonCustom type="default">Connect Wallet</ButtonCustom>
      </Styled.Nav>
    </Styled.Header>
  );
};

export default Header;
