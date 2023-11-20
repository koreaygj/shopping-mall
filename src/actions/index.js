import * as types from "./CartActionTypes";

export const addToCart = (item) => ({
  type: types.ADD,
  item,
});

export const removeAtCart = (item) => ({
  type: types.REMOVE,
  item,
});
