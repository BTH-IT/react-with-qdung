import React from "react";
import {
  FooterWrapper,
  FooterLogo,
  FooterLeft,
  FooterLeftContent,
  FooterLeftSocial,
  FooterRightTitle,
  FooterRightList,
} from "./styles";
import logo from "../../assets/logo.svg";
import ytb from "../../assets/ytb.svg";
import { Col } from "antd";
import { RowCustom } from "../../lib/antdCustom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <RowCustom gutter={24}>
          <Col xs={12}>
            <FooterLeft>
              <FooterLogo>
                <img src={logo} alt="" />
              </FooterLogo>
              <FooterLeftContent>
                <p>
                  Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
                  pharetra gravida est.{" "}
                </p>
                <FooterLeftSocial>
                  <img src={ytb} alt="" />
                  <img src={ytb} alt="" />
                  <img src={ytb} alt="" />
                  <img src={ytb} alt="" />
                </FooterLeftSocial>
                <p>All rights reserved@2021</p>
              </FooterLeftContent>
            </FooterLeft>
          </Col>
          <Col xs={6}>
            <FooterRightTitle>About us</FooterRightTitle>
            <FooterRightList>
              <li>About NFTs</li>
              <li>About NFTs</li>
              <li>About NFTs</li>
              <li>About NFTs</li>
            </FooterRightList>
          </Col>
          <Col xs={6}>
            <FooterRightTitle>Support</FooterRightTitle>
            <FooterRightList>
              <li>About NFTs</li>
              <li>About NFTs</li>
              <li>About NFTs</li>
              <li>About NFTs</li>
            </FooterRightList>
          </Col>
        </RowCustom>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
