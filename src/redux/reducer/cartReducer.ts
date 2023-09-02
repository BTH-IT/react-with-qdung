import { ICartItemProps } from "../../services/cartService";
import { CART_ACTION_TYPE, SUCCESS } from "../action/constant";

export interface CartStateType {
  data: ICartItemProps[];
}

export interface ActionType<T> {
  type: string;
  payload?: T;
}

const reducerInit: CartStateType = {
  data: [],
};

export default function (state = reducerInit, action: ActionType<any>) {
  switch (action.type) {
    case SUCCESS(CART_ACTION_TYPE.GET_CART):
      return {
        ...state,
        data: [...action.payload],
      };
    default:
      return state;
  }
}
