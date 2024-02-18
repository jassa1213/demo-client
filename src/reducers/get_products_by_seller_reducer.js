// productReducer.js
import {
    GET_PRODUCTS_BY_SELLER_REQUEST,
    GET_PRODUCTS_BY_SELLER_SUCCESS,
    GET_PRODUCTS_BY_SELLER_FAILURE,
  } from  '../actions/action_types';
  
  const initialState = {
    loading: false,
    products: [],
    error: null,
  };
  
  const getProductsBySellerReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS_BY_SELLER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_PRODUCTS_BY_SELLER_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: null,
        };
      case GET_PRODUCTS_BY_SELLER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getProductsBySellerReducer
  