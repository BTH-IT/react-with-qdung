import React from "react";
import {
  CardCustomWrapper,
  CardETH,
  CardImage,
  CardInfo,
  CardInfoAction,
  CardInfoContent,
  CardInfoContentText,
  CardTimeTag,
} from "./styles";
import { Avatar } from "antd";
import Icon from "../../assets/imageIcon.png";
import { HeartOutlined } from "@ant-design/icons";
import { ButtonCustom } from "../../lib/antdCustom";

const CardCustom = ({
  cartTimeTag = true,
  cartName = true,
  cartAction = true,
  cartETH = true,
  hasButton = true,
  hovered = false,
}: any) => {
  return (
    <CardCustomWrapper bordered={false}>
      <CardImage hovered>
        <img
          src="https://images.unsplash.com/photo-1693040516624-a22f0906faab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          alt=""
        />
        {cartTimeTag && <CardTimeTag>03:18:24</CardTimeTag>}
        {hovered && <ButtonCustom type="primary">Place a bid</ButtonCustom>}
      </CardImage>
      <CardInfo>
        <CardInfoContent>
          <Avatar size={36} icon={<img src={Icon}></img>} />
          <CardInfoContentText>
            {cartName ? (
              <>
                <h3>Virtual Art</h3>
                <span>by @wzard</span>
              </>
            ) : (
              <h3>@wzard</h3>
            )}
          </CardInfoContentText>
        </CardInfoContent>
        <CardInfoAction>
          {cartAction ? (
            <>
              <HeartOutlined />
              <span>92</span>
            </>
          ) : (
            <span>ERC-721</span>
          )}
        </CardInfoAction>
      </CardInfo>
      {cartETH && (
        <CardETH>
          <h3>Current Bid</h3>
          <span>4.89 ETH</span>
        </CardETH>
      )}
      {hasButton && (
        <ButtonCustom
          type="default"
          borderColor="white"
          textColor="white"
          fontWeight="300"
          style={{
            width: "100%",
          }}
        >
          Place a bid
        </ButtonCustom>
      )}
    </CardCustomWrapper>
  );
};

export default CardCustom;
