import styled, { css } from "styled-components";
import { Button } from "antd";

interface ButtonCustomProps {
  paddingX?: string;
  paddingY?: string;
}

export const ButtonCustom = styled(Button)<ButtonCustomProps>`
  &.ant-btn {
    border-radius: 0px;
    padding-left: ${(props) => (props.paddingX ? props.paddingX : "10px")};
    padding-right: ${(props) => (props.paddingX ? props.paddingX : "10px")};
    padding-top: ${(props) => (props.paddingY ? props.paddingY : "15px")};
    padding-bottom: ${(props) => (props.paddingY ? props.paddingY : "15px")};

    font-size: 1rem;
    font-weight: 600;
    color: #ffce4e;
    background-color: transparent;
    border: 1px solid #ffce4e;
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
