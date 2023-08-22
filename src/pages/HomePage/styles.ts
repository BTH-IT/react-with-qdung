import { Modal, Form } from "antd";
import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AntdModal = Modal;

export const AntdModalCustom = styled(AntdModal)`
  width: 1000px !important;
  & .ant-modal-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
  }

  & .ant-modal-footer {
    display: flex;
    align-items: center;
    justify-content: center;

    & .ant-btn {
      border-radius: 58px;
      border: 1px solid var(--primary-60, #ff5c00);
      color: #ff5c00;
      width: 100%;
      max-width: 210px;

      &:hover {
        border: 1px solid var(--primary-60, #ff5c00);
        color: #ff5c00;
      }
    }

    & .ant-btn-primary {
      background-color: #ff5c00;
      color: white;

      &:hover {
        background-color: #ff5c00;
        color: white;
      }
    }
  }
`;

const AntdForm = Form;

export const AntdFormCustom = styled(AntdForm)`
  margin-top: 20px !important;
  margin-bottom: 60px !important;
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

    & label::after {
      display: none;
    }
  }

  & .ant-input {
    border-radius: 58px;
    border: 1px solid var(--neutral-30, #e4e4e4);
    font-size: 1.2rem;
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
