import axios from "axios";

export const SET_AUTHENTICATION = "SET_AUTHENTICATION";
export const GET_CICLOS = "GET_CICLOS"
export const GET_USUARIOS = "GET_USUARIOS"
export const GET_SEDES = "GET_SEDES"

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

export const getUsuarios =()=>{
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3001/user/")
    console.log("informacion dbData", dbData)
    const users =  dbData.data;
    dispatch({
      type: GET_USUARIOS,
      payload: users
    })
  }
}

export const getSedes =()=>{
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3001/sede/getSedes")
    console.log("informacion dbData", dbData)
    const sedes =  dbData.data;
    dispatch({
      type: GET_SEDES,
      payload: sedes
    })
  }
}

