import { Button, Card, Skeleton } from "antd";
import * as Styled from "./styles";
import cartApi, { ICartItemProps } from "../services/cartService";
import { showAlertNotice } from "../utils/notification";
import { useAppSelector } from "../utils/reduxHelper";
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

export default function CardItem({
  product,
  getCartList,
}: {
  product: ICardItemProps;
  getCartList: () => void;
}) {
  const cartsReducer = useAppSelector((state) => state.carts);

  const handleAddToCart = async () => {
    try {
      const existedProduct: ICartItemProps | undefined = cartsReducer.data.find(
        (cart) => cart.productId === product.id
      );

      const { id, ...newProduct } = product;

      if (existedProduct === undefined) {
        await cartApi.createCart({
          ...newProduct,
          productId: id,
          count: 1,
        });
      } else {
        await cartApi.updateCart(
          {
            count: existedProduct.count + 1,
          },
          existedProduct.id
        );
      }
      getCartList();
      showAlertNotice("success", "Add to cart successfull");
    } catch (error) {
      console.log(error);
      showAlertNotice("error", "Add to cart failure");
    }
  };

  return (
    <>
      <Card
        hoverable
        bordered
        style={{ width: "100%", marginBottom: "12px" }}
        cover={<Styled.ImageCard alt="example" src={product.image} />}
      >
        <Meta
          title={product.title}
          description={<span>{product.price} $</span>}
        />
        <Button
          type="primary"
          style={{ width: "100%", marginTop: "12px" }}
          size="large"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </Card>
    </>
  );
}
