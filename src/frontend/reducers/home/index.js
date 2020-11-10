// Http Request
import { PostRequest } from "~/helpers/api/api.client";

// modal - error message
import { createModal } from "~/reducers/modal";

// helpers
import { createWarningMessage } from "~/helpers/utils";

// Initial state
const initialState = {
  list: [],
};

/* Types */
export const ACTION_GET_LIST = "ACTION_GET_LIST";

/* Reducer */
const homeReducer = (state = initialState, action) => {
  if (action.type === ACTION_GET_LIST) {
    return { ...state, list: action.Obj };
  }

  return state;
};

/* Action Creators */
const getList = () => {
  return (dispatch) => {
    return PostRequest("/api/list", {})
      .then((response) => {
        dispatch({ type: ACTION_GET_LIST, Obj: response.data });
      })
      .catch((err) => {
        const { message, error } = err.data;

        dispatch(
          createModal(
            createWarningMessage("¡Something whent wrong!", message || error)
          )
        );
      });
  };
};

export { homeReducer as default, getList };
