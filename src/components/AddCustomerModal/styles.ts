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

const AntdForm = Form;

export const AntdFormCustom = styled(AntdForm)`
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

const AntdFormItem = Form.Item;

export const AntdFormItemCustom = styled(AntdFormItem)`
  margin-bottom: 12px;

  & .ant-row.ant-form-item-row {
    flex-direction: column;
    gap: 6px;
  }

  & .ant-col {
    flex: 0 0 100%;
  }

  & .ant-col.ant-form-item-label {
    text-align: left;

    & label::after,
    & label::before {
      display: none !important;
    }
  }

  & .ant-input {
    border-radius: 58px;
    border: 1px solid var(--neutral-30, #e4e4e4);
    font-size: 1.2rem;
  }

  & .ant-select-selection-placeholder {
    color: black;
  }

  & .ant-select-single .ant-select-selector {
    border-radius: 58px;
    border: 1px solid var(--neutral-30, #e4e4e4);
    font-size: 1.2rem;
  }
`;

export const AntdFormItemsCustom = styled(AntdFormItemCustom)`
  & .ant-form-item {
    margin: 0;
  }

  & .ant-form-item-control-input-content {
    display: flex;
    gap: 10px;

    & .ant-form-item {
      width: 100%;
    }
  }
`;
