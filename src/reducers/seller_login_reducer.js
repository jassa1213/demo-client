import * as types from '../actions/action_types';

const initialState = {
  loading: false,
  success: false,
  error: null,
  userInfo: null,
};

const sellerLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SELLER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.LOGIN_SELLER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case types.LOGIN_SELLER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sellerLoginReducer;
