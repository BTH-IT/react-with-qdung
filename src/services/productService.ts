import { IResponse } from "../App";
import { ICardItemProps } from "./../components/cartItem";
import axiosClient from "./axiosClient";

const productApi = {
  getProductById(productId: string) {
    const url = `/product/${productId}`;
    return axiosClient.get(url);
  },
  async getAll(params?: any): Promise<IResponse<ICardItemProps>> {
    return await axiosClient.get("/products", { params });
  },
};

export default productApi;
