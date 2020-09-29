/* eslint-disable new-cap */
import { apiClient } from "~/utils/api";

// Initial state
const initialState = {
  example: {},
};

/* Types */
export const ACTION_EXAMPLE = "ACTION_EXAMPLE";

/* Reducer */
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_EXAMPLE: {
      return {
        ...state,
        example: { ...state.example, ...action.Obj },
      };
    }
    default:
      return state;
  }
};

/* Action Creators */
export const getExample = (formObj) => {
  return (dispatch) => {
    return new apiClient.post("/api/example", formObj)
      .then((response) => {
        console.log(response);
        dispatch({ type: ACTION_EXAMPLE, Obj: {} });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
