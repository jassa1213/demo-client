import * as types from '../actions/action_types';

const initialState = {
  loading: false,
  success: false,
  error: null,
  userInfo: null,
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case types.LOGIN_USER_FAILURE:
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

export default userLoginReducer;
