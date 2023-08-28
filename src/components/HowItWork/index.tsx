import { Col } from "antd";
import { RowCustom } from "../../lib/antdCustom";
import {
  HowItWorkContent,
  HowItWorkIcon,
  HowItWorkLine,
  HowItWorkWrapper,
  Title,
} from "./styles";
import wallet from "../../assets/wallet.svg";
import line from "../../assets/Vector 3.png";

const HowItWork = () => {
  return (
    <HowItWorkWrapper>
      <Title>How it works</Title>
      <RowCustom>
        <Col xs={6}>
          <HowItWorkContent>
            <HowItWorkIcon>
              <img src={wallet} alt="" />
            </HowItWorkIcon>
            <span>Set up your wallet</span>
          </HowItWorkContent>
        </Col>
        <Col xs={6}>
          <HowItWorkContent>
            <HowItWorkIcon>
              <img src={wallet} alt="" />
            </HowItWorkIcon>
            <span>Set up your wallet</span>
          </HowItWorkContent>
        </Col>
        <Col xs={6}>
          <HowItWorkContent>
            <HowItWorkIcon>
              <img src={wallet} alt="" />
            </HowItWorkIcon>
            <span>Set up your wallet</span>
          </HowItWorkContent>
        </Col>
        <Col xs={6}>
          <HowItWorkContent>
            <HowItWorkIcon>
              <img src={wallet} alt="" />
            </HowItWorkIcon>
            <span>Set up your wallet</span>
          </HowItWorkContent>
        </Col>
      </RowCustom>
      <HowItWorkLine>
        <img src={line} alt="" />
        <img src={line} alt="" />
        <img src={line} alt="" />
      </HowItWorkLine>
    </HowItWorkWrapper>
  );
};

export default HowItWork;
