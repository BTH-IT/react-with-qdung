import { Button, Card, InputNumber, Space } from "antd";
import * as Styled from "./styles";
import cartApi, { ICartItemProps } from "../services/cartService";
import debounce from "lodash.debounce";
import { MutableRefObject, Ref, useRef } from "react";
const { Meta } = Card;

export interface ICardItemProps {
  title: string;
  image: string;
  price: number;
  id: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function CartItem({
  cart,
  showModal,
  getCartList,
  setDeleteCartId,
}: {
  cart: ICartItemProps;
  showModal: () => void;
  getCartList: () => void;
  setDeleteCartId: (id: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChangeAmountCart = debounce(async (value) => {
    if (value < 1) {
      if (inputRef.current && inputRef) {
        inputRef.current.value = cart.count + "";
      }
      return;
    }
    try {
      await cartApi.updateCart(
        {
          count: value,
        },
        cart.id
      );
      getCartList();
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  return (
    <>
      <Card
        hoverable
        bordered
        style={{ width: "100%", marginBottom: "12px" }}
        cover={<Styled.ImageCard alt="example" src={cart.image} />}
      >
        <Meta title={cart.title} description={<span>{cart.price} $</span>} />
        <Space>
          Amount:
          <InputNumber
            ref={inputRef}
            min={1}
            keyboard
            defaultValue={cart.count}
            onChange={handleChangeAmountCart}
          />
        </Space>
        <Button
          type="default"
          style={{ width: "100%", marginTop: "12px" }}
          size="large"
          onClick={() => {
            showModal();
            setDeleteCartId(cart.id.toString());
          }}
        >
          Remove
        </Button>
      </Card>
    </>
  );
}
