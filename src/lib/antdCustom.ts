import styled, { css } from "styled-components";
import { Button, Input, Row } from "antd";

interface ButtonCustomProps {
  paddingX?: string;
  paddingY?: string;
  textColor?: string;
  fontWeight?: string;
  borderColor?: string;
}

export const ButtonCustom = styled(Button)<ButtonCustomProps>`
  &.ant-btn {
    height: 100%;
    border-radius: 0px;
    padding: 10px 15px;
    padding-left: ${(props) => (props.paddingX ? props.paddingX : "15px")};
    padding-right: ${(props) => (props.paddingX ? props.paddingX : "15px")};
    padding-top: ${(props) => (props.paddingY ? props.paddingY : "10px")};
    padding-bottom: ${(props) => (props.paddingY ? props.paddingY : "10px")};

    font-size: 1rem;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
    color: ${(props) => (props.textColor ? props.textColor : "#ffce4e")};
    background-color: transparent;
    border: 1px solid
      ${(props) => (props.borderColor ? props.borderColor : "#ffce4e")};
    background: rgba(233, 215, 167, 0.1);

    &:hover {
      color: black !important;
      background-color: #ffce4e;
      border-color: #ffce4e !important;
    }
  }

  &.ant-btn.ant-btn-primary {
    color: black;
    border: 1px solid #ffce4e;
    background-color: #ffce4e;

    &:hover {
      color: #ffce4e !important;
      background-color: rgba(233, 215, 167, 0.1);
    }
  }
`;

export const RowCustom = styled(Row)`
  &.ant-row {
    width: 100%;
  }
`;

export const InputCustom = styled(Input)`
  &.ant-input {
    border-radius: 0px;
    width: 300px;
    background-color: transparent;
    border-color: #e7b226;
    color: white;

    padding: 20px 30px;

    &::placeholder {
      color: white;
      opacity: 0.3;
    }
  }
`;
