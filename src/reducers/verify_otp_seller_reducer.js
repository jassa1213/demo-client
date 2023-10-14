// verifyOtpReducer.js
import * as types from '../actions/action_types';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const verifyOtpSellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VERIFY_OTP_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case types.VERIFY_OTP_FAILURE:
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

export default verifyOtpSellerReducer;
