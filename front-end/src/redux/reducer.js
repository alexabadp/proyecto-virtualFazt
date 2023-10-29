import { GET_CICLOS, SET_AUTHENTICATION } from "./actions";

const initialState = {
  ciclos: [],
  authentication: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        authentication: action.payload,
      };

    case GET_CICLOS:
      return {
        ...state,
        ciclos: action.payload
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
