import { SET_AUTHENTICATION } from "./actions";

const initialState = {
  authentication: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        authentication: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
