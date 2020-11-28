import { START_LOGIN } from "../actionTypes";

const initialState = {
  isLoginIn: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN: {
      return {
        ...state,
        isLoginIn: true,
      };
    }
    default:
      return state;
  }
};

export default login;
