import {
  countrySelectList,
  customerGroupSelectList,
  daySelectList,
  locationSelectList,
  monthSelectList,
  sexSelectList,
  yearSelectList,
} from "../../utils/constant";
import { Button, Row, Col, Input, Select, Form } from "antd";
import * as Styled from "./styles";

interface AddCustomerModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCustomerModal = ({
  open,
  setOpen,
  setIsSuccess,
}: AddCustomerModalProps) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    setOpen(false);
    setIsSuccess(true);
  };

  return (
    <Styled.AntdModalCustom
      title="Add Customers"
      centered
      open={open}
      onCancel={() => setOpen(false)}
    >
      <Styled.AntdFormCustom
        form={form}
        onFinish={onFinish}
        onFinishFailed={() => setIsSuccess(false)}
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          sex: "Male",
          deliveryArea: "",
          building: "",
          street: "",
          city: "",
        }}
      >
        <Row gutter={10}>
          <Col xs={12}>
            <Styled.AntdFormItemCustom
              label="Name"
              name="name"
              rules={[
                { required: true, message: "This field is a required field" },
              ]}
            >
              <Input placeholder="Enter name"></Input>
            </Styled.AntdFormItemCustom>
            <Styled.AntdFormItemCustom
              label="Phone number"
              name="phoneNumber"
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value)
                      return Promise.reject(
                        new Error("This field is a required field")
                      );
                    const phoneRegex = new RegExp(
                      "(84|0[3|5|7|8|9])+([0-9]{8})"
                    );
                    if (phoneRegex.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("This field must be a phone number")
                    );
                  },
                }),
              ]}
            >
              <Input placeholder="Enter phone number"></Input>
            </Styled.AntdFormItemCustom>
            <Styled.AntdFormItemCustom
              label="Email"
              name="email"
              rules={[
                { required: true, message: "This field is a required field" },
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input placeholder="Enter email address"></Input>
            </Styled.AntdFormItemCustom>
            <Styled.AntdFormItemCustom
              label="Sex"
              name="sex"
              rules={[{ required: true }]}
            >
              <Select size="large" options={sexSelectList} />
            </Styled.AntdFormItemCustom>
            <div className="flex flex-col">
              <label className="form-label-custom">Date of birth</label>
              <div className="flex">
                <Styled.AntdFormItemCustom
                  name="day"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    options={daySelectList}
                    placeholder="Day"
                  />
                </Styled.AntdFormItemCustom>
                <Styled.AntdFormItemCustom
                  name="month"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    options={monthSelectList}
                    placeholder="Month"
                  />
                </Styled.AntdFormItemCustom>
                <Styled.AntdFormItemCustom
                  name="year"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    options={yearSelectList}
                    placeholder="Year"
                  />
                </Styled.AntdFormItemCustom>
              </div>
            </div>
            <Styled.AntdFormItemCustom
              label="Customer group"
              name="customerGroup"
              rules={[{ required: true }]}
            >
              <Select
                size="large"
                options={customerGroupSelectList}
                placeholder="Select customer group"
              />
            </Styled.AntdFormItemCustom>
          </Col>
          <Col xs={12}>
            <Styled.AntdFormItemCustom
              label="Delivery area"
              name="deliveryArea"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter delivery area"></Input>
            </Styled.AntdFormItemCustom>
            <Styled.AntdFormItemCustom
              label="Select Location/Branch"
              name="location"
              rules={[{ required: true }]}
            >
              <Select
                size="large"
                options={locationSelectList}
                placeholder="Select location/branch"
              />
            </Styled.AntdFormItemCustom>
            <Styled.AntdFormItemCustom
              label="Building"
              name="building"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter building"></Input>
            </Styled.AntdFormItemCustom>
            <Styled.AntdFormItemCustom
              label="Street"
              name="street"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter street"></Input>
            </Styled.AntdFormItemCustom>
            <Styled.AntdFormItemCustom
              label="City"
              name="city"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter city"></Input>
            </Styled.AntdFormItemCustom>
            <Styled.AntdFormItemCustom
              label="Country"
              name="country"
              rules={[{ required: true }]}
            >
              <Select
                size="large"
                options={countrySelectList}
                placeholder="Select country"
              />
            </Styled.AntdFormItemCustom>
          </Col>
        </Row>
        <div className="flex justify-center">
          <Button
            htmlType="button"
            className="btn btn-secondary"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button htmlType="submit" className="btn btn-primary">
            Save
          </Button>
        </div>
      </Styled.AntdFormCustom>
    </Styled.AntdModalCustom>
  );
};

export default AddCustomerModal;
