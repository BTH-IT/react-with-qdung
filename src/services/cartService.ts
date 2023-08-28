import { ICardItemProps } from "../components/cardItem";
import axiosClient from "./axiosClient";

export interface ICartItemProps extends ICardItemProps {
  productId: number;
  count: number;
  createdAt: number;
  updatedAt: number;
}

const cartApi = {
  getCartList(): Promise<ICartItemProps[]> {
    const url = `/carts`;
    return axiosClient.get(url);
  },
  async createCart(cart: any): Promise<ICartItemProps[]> {
    return await axiosClient.post("/carts", cart);
  },
  async updateCart(cart: any, cartId: any): Promise<ICartItemProps[]> {
    return await axiosClient.patch("/carts/" + cartId, cart);
  },
  async removeCart(cartId: any): Promise<ICartItemProps[]> {
    return await axiosClient.delete("/carts/" + cartId);
  },
};

export default cartApi;
