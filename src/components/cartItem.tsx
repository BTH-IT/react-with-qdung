import { Card, Skeleton } from "antd";
import * as Styled from "./styles";
const { Meta } = Card;

export interface ICardItemProps {
  title: string;
  image: string;
}

export default function CartItem({ title, image }: ICardItemProps) {
  return (
    <>
      <Card
        hoverable
        bordered
        style={{ width: "100%", marginBottom: "12px" }}
        cover={<Styled.ImageCard alt="example" src={image} />}
      >
        <Meta title={title} />
      </Card>
    </>
  );
}
