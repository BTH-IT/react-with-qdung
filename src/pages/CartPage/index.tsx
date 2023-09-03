import { Col, Modal, Row } from "antd";
import React, { useState } from "react";
import useDidMount from "../../hooks/useDidMount";
import cartApi, { ICartItemProps } from "../../services/cartService";
import CartItem from "../../components/cartItem";
import { Link } from "react-router-dom";
import { RowWrapper } from "../HomePage/styles";
import { showAlertNotice } from "../../utils/notification";
import { useAppDispatch, useAppSelector } from "../../utils/reduxHelper";
import { getCart } from "../../redux/action";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartReducer = useAppSelector((state) => state.carts);
  const dispatch = useAppDispatch();
  const [deleteCartId, setDeleteCartId] = useState<string>("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  async function getCartList() {
    try {
      const cartList = await cartApi.getCartList();

      dispatch(getCart({ data: cartList }));
    } catch (error) {
      alert("error");
    }
  }

  useDidMount(() => {
    getCartList();
  });

  const handleOk = async () => {
    try {
      if (!deleteCartId) {
        setIsModalOpen(false);
        return;
      }
      await cartApi.removeCart(deleteCartId);
      getCartList();
      setDeleteCartId("");
      showAlertNotice("success", "Delete cart successfull");
    } catch (error) {
      console.log(error);
      showAlertNotice("error", "Delete cart failure");
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="container">
      <h1>Cart List</h1>
      <div
        style={{
          marginTop: "12px",
        }}
      >
        Total:{" "}
        {cartReducer.data.reduce((p, c) => p + c.count * c.price, 0).toFixed(2)}
      </div>
      <Link
        style={{
          textAlign: "center",
          margin: "12px 0",
          display: "block",
          textDecoration: "none",
          color: "blue",
        }}
        to={"/?_limit=8&_page=1"}
      >
        Go to home
      </Link>
      <RowWrapper gutter={12}>
        {cartReducer.data.map((cart, idx) => (
          <Col key={cart.title + idx} xs={6}>
            <CartItem
              cart={cart}
              showModal={showModal}
              getCartList={getCartList}
              setDeleteCartId={(id: string) => setDeleteCartId(id)}
            />
          </Col>
        ))}
      </RowWrapper>
      <Modal
        title="Confirm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Are you sure?</p>
      </Modal>
    </div>
  );
};

export default CartPage;
