import { Button, Alert } from "antd";
import { useState } from "react";
import * as Styled from "./styles";
import AddCustomerModal from "../../components/AddCustomerModal";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      {isSuccess && <Alert message="Success Text" type="success" />}

      <Styled.HomePageWrapper>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Form Modal
        </Button>
      </Styled.HomePageWrapper>
      <AddCustomerModal
        open={open}
        setOpen={setOpen}
        setIsSuccess={setIsSuccess}
      ></AddCustomerModal>
    </>
  );
};

export default HomePage;
