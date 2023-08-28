import React from "react";
import * as Styled from "./styles";
import { Avatar } from "antd";
import Icon from "../../assets/imageIcon.png";

const CardCreator = () => {
  return (
    <Styled.CardCreatorWrapper>
      <Styled.CardCreatorContent>
        <Avatar size={56} icon={<img src={Icon}></img>} />
        <Styled.CardCreatorInfo>
          <h3>Wzard Dee</h3>
          <span>4.89 ETH</span>
        </Styled.CardCreatorInfo>
      </Styled.CardCreatorContent>
      <Styled.CardCreatorTotal>
        <h3>33</h3>
        <span>Items</span>
      </Styled.CardCreatorTotal>
    </Styled.CardCreatorWrapper>
  );
};

export default CardCreator;
