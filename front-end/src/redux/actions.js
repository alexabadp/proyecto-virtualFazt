import axios from "axios";

export const SET_AUTHENTICATION = "SET_AUTHENTICATION";
export const GET_CICLOS = "GET_CICLOS"

export const setAuthentication = (payload) => {
  return {
    type: SET_AUTHENTICATION,
    payload: payload,
  };
};

export const getCiclos = ()=>{
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3001/ciclo/getCiclos")
    console.log("informacion dbData", dbData)
    const ciclos =  dbData.data;
    dispatch({
      type: GET_CICLOS,
      payload: ciclos
    })
  }
}
