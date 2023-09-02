import { ICartItemProps } from "../../services/cartService";
import { ActionType } from "../reducer/productReducer";
import { CART_ACTION_TYPE, FALL, REQUEST } from "./constant";

export const getCart = (params: {
  data: ICartItemProps[];
}): ActionType<{
  data: ICartItemProps[];
}> => ({
  type: CART_ACTION_TYPE.GET_CART,
  payload: params,
});
