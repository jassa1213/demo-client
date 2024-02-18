// actions.js
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './action_types';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: { ...item, quantity: 1 },
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const updateQuantity = (productId, newQuantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, newQuantity },
});