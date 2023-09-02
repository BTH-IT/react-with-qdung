export const PRODUCT_ACTION_TYPE = {
  GET_PRODUCT: "GET_PRODUCT",
};

export const CART_ACTION_TYPE = {
  GET_CART: "GET_CART",
};

export const REQUEST = (type: string) => `${type}_REQUEST`;
export const SUCCESS = (type: string) => `${type}_SUCCESS`;
export const FALL = (type: string) => `${type}_FALL`;
