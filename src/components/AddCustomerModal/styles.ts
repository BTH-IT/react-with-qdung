import { Modal, Form } from "antd";
import styled from "styled-components";

const AntdModal = Modal;

export const AntdModalCustom = styled(AntdModal)`
  width: 1200px !important;
  & .ant-modal-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
  }

  & .ant-modal-footer {
    display: none;
  }
`;

export const AntdFormCustom = styled.form`
  margin-top: 20px !important;
  margin-bottom: 20px !important;

  .flex {
    display: flex;
    gap: 10px;

    .ant-form-item {
      flex: 1;
    }
  }

  .flex.flex-col {
    flex-direction: column;
  }

  .justify-center {
    justify-content: center;
  }

  .form-label-custom {
    margin-top: 6px;
  }

  & .btn {
    border-radius: 58px;
    border: 1px solid #ff5c00;
    color: #ff5c00;
    width: 100%;
    max-width: 210px;
    margin-top: 20px;

    &:hover {
      border: 1px solid #ff5c00 !important;
      color: #ff5c00 !important;
    }
  }

  & .btn-primary {
    background-color: #ff5c00;
    color: white;

    &:hover {
      background-color: #ff5c00 !important;
      color: white !important;
    }
  }
`;

export const FormItemCustom = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & input {
    border-radius: 58px;
    border: 1px solid #e4e4e4;
    font-size: 1.4rem;
    padding: 4px 11px;
    line-height: 1.5;
    outline: none;
  }

  & .ant-select-selection-placeholder {
    color: black;
  }

  & select {
    border-radius: 58px;
    border: 1px solid #e4e4e4;
    font-size: 1.4rem;
    padding: 7.5px 12px;
    line-height: 2;
    outline: none;
  }

  & p {
    color: red;
    min-height: 22px;
  }
`;
