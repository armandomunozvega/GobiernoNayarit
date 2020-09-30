/* eslint-disable new-cap */
import { apiClient } from "~/utils/api";

// Initial state
const initialState = {
  empleados: [],
};

/* Types */
export const ACTION_GET_EMPLEADOS = "ACTION_GET_EMPLEADOS";

/* Reducer */
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_EMPLEADOS: {
      return {
        ...state,
        empleados: action.Obj,
      };
    }
    default:
      return state;
  }
};

/* Action Creators */
export const getEmpleados = () => {
  return (dispatch) => {
    return new apiClient.get("employees", {})
      .then((response) => {
        console.log(response);
        dispatch({ type: ACTION_GET_EMPLEADOS, Obj: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
