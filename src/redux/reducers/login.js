import { LOGIN_ERROR, LOGIN_SUCCESS, START_LOGIN } from "../actionTypes";

const initialState = {
  isLoginIn: false,
  loginError: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN: {
      return {
        ...state,
        isLoginIn: true,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoginIn: false,
        loginError: null,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        isLoginIn: false,
        loginError: action.payload,
      };
    }
    default:
      return state;
  }
};

export default login;
