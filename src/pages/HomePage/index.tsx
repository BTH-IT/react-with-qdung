import { Button, Row, Col, Input, Select } from "antd";
import { useState } from "react";
import * as Styled from "./styles";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styled.HomePageWrapper>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Form Modal
        </Button>
      </Styled.HomePageWrapper>
      <Styled.AntdModalCustom
        title="Add Customers"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <Styled.AntdFormCustom>
          <Row gutter={10}>
            <Col xs={12}>
              <Styled.AntdFormItemCustom label="Name" name="name">
                <Input placeholder="Enter name"></Input>
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemCustom
                label="Phone number"
                name="phoneNumber"
              >
                <Input placeholder="Enter phone number"></Input>
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemCustom label="Email" name="email">
                <Input placeholder="Enter email address"></Input>
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemCustom label="Sex" name="sex">
                <Select size="large" options={[]} />
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemsCustom label="Email">
                <Styled.AntdFormItemCustom name="dateOfBirth">
                  <Select size="large" options={[]} />
                </Styled.AntdFormItemCustom>
                <Styled.AntdFormItemCustom name="dateOfBirth">
                  <Select size="large" options={[]} />
                </Styled.AntdFormItemCustom>
                <Styled.AntdFormItemCustom name="dateOfBirth">
                  <Select size="large" options={[]} />
                </Styled.AntdFormItemCustom>
              </Styled.AntdFormItemsCustom>
              <Styled.AntdFormItemCustom
                label="Customer group"
                name="customerGroup"
              >
                <Select size="large" options={[]} />
              </Styled.AntdFormItemCustom>
            </Col>
            <Col xs={12}>
              <Styled.AntdFormItemCustom
                label="Delivery area"
                name="deliveryArea"
              >
                <Input placeholder="Enter delivery area"></Input>
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemCustom
                label="Select Location/Branch"
                name="location"
              >
                <Select size="large" options={[]} />
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemCustom label="Building" name="building">
                <Input placeholder="Enter building"></Input>
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemCustom label="Street" name="street">
                <Input placeholder="Enter street"></Input>
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemCustom label="City" name="city">
                <Input placeholder="Enter city"></Input>
              </Styled.AntdFormItemCustom>
              <Styled.AntdFormItemCustom label="Country" name="country">
                <Select size="large" options={[]} />
              </Styled.AntdFormItemCustom>
            </Col>
          </Row>
        </Styled.AntdFormCustom>
      </Styled.AntdModalCustom>
    </>
  );
};

export default HomePage;
