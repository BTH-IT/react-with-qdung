import {
  countrySelectList,
  customerGroupSelectList,
  daySelectList,
  locationSelectList,
  monthSelectList,
  phoneRegExp,
  sexSelectList,
  yearSelectList,
} from "../../utils/constant";
import { Button, Row, Col, Input, Select, Form } from "antd";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface AddCustomerModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue = {
  name: "",
  phoneNumber: "",
  email: "",
  sex: "1",
  deliveryArea: "",
  building: "",
  street: "",
  city: "",
  day: "",
  month: "",
  year: "",
  customerGroup: "",
  location: "",
  country: "",
};

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    phoneNumber: yup
      .string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid"),
    email: yup
      .string()
      .required("This field is required")
      .email("This field must be an email"),
    sex: yup.string().required("This field is required"),
    deliveryArea: yup.string().required("This field is required"),
    building: yup.string().required("This field is required"),
    street: yup.string().required("This field is required"),
    city: yup.string().required("This field is required"),
    day: yup.string().required("This field is required"),
    month: yup.string().required("This field is required"),
    year: yup.string().required("This field is required"),
    customerGroup: yup.string().required("This field is required"),
    location: yup.string().required("This field is required"),
    country: yup.string().required("This field is required"),
  })
  .required();

const AddCustomerModal = ({
  open,
  setOpen,
  setIsSuccess,
}: AddCustomerModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (value: any) => {
    if (!isValid) return;

    console.log(value);
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
      <Styled.AntdFormCustom onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={10}>
          <Col xs={12}>
            <Styled.FormItemCustom>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Enter name"
                {...register("name")}
              ></input>
              <p>{errors.name ? errors.name.message : ""}</p>
            </Styled.FormItemCustom>
            <Styled.FormItemCustom>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                placeholder="Enter phone number"
                {...register("phoneNumber")}
              ></input>
              <p>{errors.phoneNumber ? errors.phoneNumber.message : ""}</p>
            </Styled.FormItemCustom>
            <Styled.FormItemCustom>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="Enter email address"
                {...register("email")}
              ></input>
              <p>{errors.email?.message}</p>
            </Styled.FormItemCustom>
            <Styled.FormItemCustom>
              <label htmlFor="sex">Sex</label>
              <select id="sex" {...register("sex")}>
                {sexSelectList.map((sex) => (
                  <option value={sex.value} key={sex.value}>
                    {sex.label}
                  </option>
                ))}
              </select>
              <p>{errors.sex ? errors.sex.message : ""}</p>
            </Styled.FormItemCustom>
            <div className="flex flex-col">
              <label>Date of birth</label>
              <div className="flex">
                <Styled.FormItemCustom style={{ flex: 1 }}>
                  <select {...register("day")}>
                    {daySelectList.map((day, idx) => (
                      <option
                        value={day.value}
                        key={day.value}
                        hidden={idx === 0}
                      >
                        {day.label}
                      </option>
                    ))}
                  </select>
                  <p>{errors.day ? errors.day.message : ""}</p>
                </Styled.FormItemCustom>
                <Styled.FormItemCustom style={{ flex: 1 }}>
                  <select {...register("month")}>
                    {monthSelectList.map((month, idx) => (
                      <option
                        value={month.value}
                        key={month.value}
                        hidden={idx === 0}
                      >
                        {month.label}
                      </option>
                    ))}
                  </select>
                  <p>{errors.month ? errors.month.message : ""}</p>
                </Styled.FormItemCustom>
                <Styled.FormItemCustom style={{ flex: 1 }}>
                  <select {...register("year")}>
                    {yearSelectList.map((year, idx) => (
                      <option
                        value={year.value}
                        key={year.value}
                        hidden={idx === 0}
                      >
                        {year.label}
                      </option>
                    ))}
                  </select>
                  <p>{errors.year ? errors.year.message : ""}</p>
                </Styled.FormItemCustom>
              </div>
            </div>
            <Styled.FormItemCustom>
              <label htmlFor="customerGroup">Customer group</label>
              <select {...register("customerGroup")}>
                {customerGroupSelectList.map((customerGroup, idx) => (
                  <option
                    value={customerGroup.value}
                    key={customerGroup.value}
                    hidden={idx === 0}
                  >
                    {customerGroup.label}
                  </option>
                ))}
              </select>
              <p>{errors.customerGroup ? errors.customerGroup.message : ""}</p>
            </Styled.FormItemCustom>
          </Col>
          <Col xs={12}>
            <Styled.FormItemCustom>
              <label htmlFor="deliveryArea">Delivery area</label>
              <input
                id="deliveryArea"
                placeholder="Enter delivery area"
                {...register("deliveryArea")}
              ></input>
              <p>{errors.deliveryArea ? errors.deliveryArea.message : ""}</p>
            </Styled.FormItemCustom>
            <Styled.FormItemCustom>
              <label htmlFor="location">Select Location/Branch</label>
              <select {...register("location")}>
                {locationSelectList.map((location, idx) => (
                  <option
                    value={location.value}
                    key={location.value}
                    hidden={idx === 0}
                  >
                    {location.label}
                  </option>
                ))}
              </select>
              <p>{errors.location ? errors.location.message : ""}</p>
            </Styled.FormItemCustom>
            <Styled.FormItemCustom>
              <label htmlFor="building">Building</label>
              <input
                id="building"
                placeholder="Enter building"
                {...register("building")}
              ></input>
              <p>{errors.building ? errors.building.message : ""}</p>
            </Styled.FormItemCustom>
            <Styled.FormItemCustom>
              <label htmlFor="street">Street</label>
              <input
                id="street"
                placeholder="Enter street"
                {...register("street")}
              ></input>
              <p>{errors.street ? errors.street.message : ""}</p>
            </Styled.FormItemCustom>
            <Styled.FormItemCustom>
              <label htmlFor="city">City</label>
              <input
                id="city"
                placeholder="Enter city"
                {...register("city")}
              ></input>
              <p>{errors.city ? errors.city.message : ""}</p>
            </Styled.FormItemCustom>
            <Styled.FormItemCustom>
              <label htmlFor="country">Country</label>
              <select {...register("country")}>
                {countrySelectList.map((country, idx) => (
                  <option
                    value={country.value}
                    key={country.value}
                    hidden={idx === 0}
                  >
                    {country.label}
                  </option>
                ))}
              </select>
              <p>{errors.country ? errors.country.message : ""}</p>
            </Styled.FormItemCustom>
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
