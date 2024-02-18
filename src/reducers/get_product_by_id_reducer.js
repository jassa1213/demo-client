import {
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAILURE,
  } from '../actions/action_types';
  
  const initialState = {
    loading: false,
    productData: null,
    error: null,
  };
  
  const getProductByIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          productData: null,
          error: null,
        };
      case GET_PRODUCT_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          productData: action.payload,
          error: null,
        };
      case GET_PRODUCT_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          productData: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getProductByIdReducer;
  