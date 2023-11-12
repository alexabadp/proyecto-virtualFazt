import { GET_CICLOS, SET_AUTHENTICATION, GET_USUARIOS, GET_SEDES } from "./actions";

const initialState = {
  ciclos: [],
  usuarios: [],
  sedes:[],
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
    
    case GET_USUARIOS:
      return {
        ...state,
        usuarios: action.payload
      };

    case GET_SEDES:
      return {
        ...state,
        sedes: action.payload
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
