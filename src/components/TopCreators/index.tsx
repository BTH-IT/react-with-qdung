import * as Styled from "./styles";
import { ButtonCustom, RowCustom } from "../../lib/antdCustom";
import elipse from "../../assets/elipse.svg";
import { Col } from "antd";
import CardCreator from "../CardCreator";

const TopCreators = () => {
  return (
    <Styled.TopCreatorsWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>
          Top Creators
          <img src={elipse}></img>
        </Styled.Title>
      </Styled.TitleWrapper>
      <RowCustom gutter={12} style={{ marginTop: "50px" }}>
        <Col xs={12}>
          <CardCreator></CardCreator>
        </Col>
        <Col xs={12}>
          <CardCreator></CardCreator>
        </Col>
      </RowCustom>
      <RowCustom gutter={12} style={{ marginTop: "12px" }}>
        <Col xs={12}>
          <CardCreator></CardCreator>
        </Col>
        <Col xs={12}>
          <CardCreator></CardCreator>
        </Col>
      </RowCustom>
      <Styled.BottomWrapper>
        <ButtonCustom
          type="default"
          textColor="white"
          fontWeight="500"
          paddingX="30px"
          paddingY="10px"
        >
          View All
        </ButtonCustom>
      </Styled.BottomWrapper>
    </Styled.TopCreatorsWrapper>
  );
};

export default TopCreators;
