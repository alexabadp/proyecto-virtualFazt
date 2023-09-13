export const SET_AUTHENTICATION = "SET_AUTHENTICATION";

export const setAuthentication = (payload) => {
  return {
    type: SET_AUTHENTICATION,
    payload: payload,
  };
};
