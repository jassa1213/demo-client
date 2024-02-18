import {
    REMOVE_PRODUCT_REQUEST,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAILURE,
  } from '../actions/action_types';
  
  const initialState = {
    loading: false,
    productData: null,
    error: null,
  };
  
  const removeProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case REMOVE_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          productData: null,
          error: null,
        };
      case REMOVE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          productData: action.payload,
          error: null,
        };
      case REMOVE_PRODUCT_FAILURE:
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
  
  export default removeProductReducer;
  