import { IMeta } from "../../App";
import { ICardItemProps } from "../../components/cartItem";
import { ActionType } from "../reducer/productReducer";
import { FALL, PRODUCT_ACTION_TYPE, REQUEST, SUCCESS } from "./constant";

export const getProduct = (params: {
  data: ICardItemProps[];
  pagination: IMeta;
}): ActionType<{
  data: ICardItemProps[];
  pagination: IMeta;
}> => ({
  type: SUCCESS(PRODUCT_ACTION_TYPE.GET_PRODUCT),
  payload: params,
});

export const getProductRequest = (): ActionType<any> => ({
  type: REQUEST(PRODUCT_ACTION_TYPE.GET_PRODUCT),
});

export const getProductFall = (): ActionType<any> => ({
  type: FALL(PRODUCT_ACTION_TYPE.GET_PRODUCT),
});

export const setMeta = (params: IMeta): ActionType<any> => ({
  type: PRODUCT_ACTION_TYPE.SET_META,
  payload: params,
});
